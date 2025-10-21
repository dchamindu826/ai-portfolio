import React, { useState } from 'react';
import styles from './WriterDemo.module.css';

const WriterDemo = ({ onBack }) => {
  const [productName, setProductName] = useState('');
  const [tone, setTone] = useState('Professional');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const generateDescription = async () => {
    if (!productName.trim()) {
      setError('Please enter a product name first.');
      return;
    }
    setIsLoading(true);
    setDescription('');
    setError('');

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const prompt = `Generate a compelling and creative product description for a product named "${productName}". The description should be around 50-70 words. The tone of voice must be ${tone}.`;

    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }]
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate description.";
      setDescription(generatedText);

    } catch (err) {
      console.error("Gemini API error:", err);
      setError("Sorry, an error occurred while generating the description. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.writerBox}>
        <div className={styles.header}>
            <h2>Live AI Description Writer</h2>
            <button onClick={onBack} className={styles.backButton}>Back</button>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputGroup}>
            <label htmlFor="productName">Product Name</label>
            <input id="productName" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="e.g., Quantum Smart Watch" />
          </div>
          <div className={styles.inputGroup}>
            <label>Select a Tone</label>
            <div className={styles.toneSelector}>
              {['Professional', 'Casual', 'Excited'].map(t => (
                <button key={t} className={tone === t ? styles.active : ''} onClick={() => setTone(t)}>{t}</button>
              ))}
            </div>
          </div>
          <button onClick={generateDescription} disabled={isLoading} className={styles.generateButton}>
            {isLoading ? 'Generating...' : 'Generate Description'}
          </button>
        </div>
        <div className={styles.outputSection}>
          <h3>Generated Description:</h3>
          <div className={styles.outputBox}>
            {isLoading && <div className={styles.loader}></div>}
            {error && <p className={styles.errorText}>{error}</p>}
            {!isLoading && !error && <p>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterDemo;