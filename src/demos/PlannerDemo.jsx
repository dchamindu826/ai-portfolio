import React, { useState } from 'react';
import styles from './PlannerDemo.module.css';

const PlannerDemo = ({ onBack }) => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('3');
  const [tripType, setTripType] = useState('Adventure');
  const [plan, setPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const generatePlan = async () => {
    if (!destination.trim() || !days) {
      setError('Please fill in all fields to generate a plan.');
      return;
    }
    setIsLoading(true);
    setPlan('');
    setError('');

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const prompt = `Generate a creative and exciting travel itinerary for a ${days}-day trip to ${destination}. The trip type is "${tripType}". For each day, provide a title and 2-3 bullet points of suggested activities. Make the response engaging.`;

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
      let generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate plan.";
      
      generatedText = generatedText
        .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>')
        .replace(/\* (.*?)(?=\n\*|\n\n|$)/g, '<li>$1</li>')
        .replace(/(\r\n|\n|\r)/gm, '<br>');

      setPlan(generatedText);

    } catch (err) {
      console.error("Gemini API error:", err);
      setError("Sorry, an error occurred while generating the plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.plannerBox}>
        <div className={styles.header}>
          <h2>Live AI Travel Planner</h2>
          <button onClick={onBack} className={styles.backButton}>Back</button>
        </div>
        <div className={styles.inputGrid}>
          <div>
            <label>Destination</label>
            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="e.g., Tokyo" />
          </div>
          <div>
            <label>Number of Days</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} placeholder="e.g., 5" min="1" />
          </div>
        </div>
        <div className={styles.inputGroup}>
            <label>Select Trip Type</label>
            <div className={styles.toneSelector}>
              {['Adventure', 'Relaxing', 'Cultural'].map(t => (
                <button key={t} className={tripType === t ? styles.active : ''} onClick={() => setTripType(t)}>{t}</button>
              ))}
            </div>
          </div>
        <button onClick={generatePlan} disabled={isLoading} className={styles.generateButton}>
          {isLoading ? 'Planning...' : 'Generate Itinerary'}
        </button>
        <div className={styles.outputSection}>
          <h3>Your Custom Itinerary:</h3>
          <div className={styles.outputBox}>
            {isLoading && <div className={styles.loader}></div>}
            {error && <p className={styles.errorText}>{error}</p>}
            {!isLoading && !error && <div dangerouslySetInnerHTML={{ __html: plan }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerDemo;