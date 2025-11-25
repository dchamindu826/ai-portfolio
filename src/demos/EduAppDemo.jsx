import React, { useState, useEffect } from 'react';
import MobileFrame from '../components/MobileFrame';
import { 
  FaHome, FaBook, FaUser, FaBell, FaSearch, FaPlay, 
  FaPause, FaChevronLeft, FaLock, FaFire, FaCircle, FaStar, FaDownload 
} from 'react-icons/fa';

const EduAppDemo = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [screen, setScreen] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [courseTab, setCourseTab] = useState('lessons'); // lessons, about

  // Advanced Mock Data
  const courses = [
    { id: 1, title: "Combined Maths: Integration", instructor: "Mr. Sunil Perera", progress: 75, color: "#6366f1", rating: 4.9, students: "1.2k", desc: "Master the fundamentals of Integration with advanced techniques.", lessons: [
        { id: 1, title: "01. Introduction to Limits", time: "45 min", locked: false },
        { id: 2, title: "02. Basic Differentiation", time: "1h 20m", locked: false },
        { id: 3, title: "03. Integration Rules", time: "55 min", locked: true },
        { id: 4, title: "04. Past Paper Questions", time: "1h 10m", locked: true },
    ]},
    { id: 2, title: "Physics: Electronics", instructor: "Dr. K. Silva", progress: 30, color: "#ec4899", rating: 4.8, students: "850", desc: "Complete guide to Semiconductors, Diodes and Transistors.", lessons: [
        { id: 1, title: "01. Semiconductor Theory", time: "30 min", locked: false },
        { id: 2, title: "02. Diodes & Applications", time: "50 min", locked: true },
    ]}
  ];

  // --- Screens ---

  const HomeScreen = () => (
    <div className="fade-in" style={{ padding: '20px' }}>
       {/* Header */}
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginTop: '10px' }}>
          <div>
             <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>Good Morning,</p>
             <h1 style={{ color: 'white', fontSize: '22px', margin: 0, fontWeight: '700' }}>Kasun Perera</h1>
          </div>
          <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <FaBell color="white" />
          </div>
       </div>

       {/* Search */}
       <div style={{ background: '#1e293b', borderRadius: '16px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
          <FaSearch color="#64748b" />
          <input type="text" placeholder="Find a course..." style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
       </div>

       {/* Featured / Live Class */}
       <div style={{ background: 'linear-gradient(135deg, #4f46e5, #312e81)', padding: '20px', borderRadius: '20px', marginBottom: '25px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(99, 102, 241, 0.5)' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
             <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px'}}>
                <span style={{ background: '#ef4444', color: 'white', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold' }}>LIVE</span>
                <span style={{color:'#c7d2fe', fontSize:'11px'}}>• 250 Watching</span>
             </div>
             <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '5px' }}>Final Revision: Mechanics</h2>
             <p style={{ color: '#c7d2fe', fontSize: '12px', marginBottom: '15px' }}>By Dr. K. Silva</p>
             <button style={{ background: 'white', color: '#4f46e5', border: 'none', padding: '8px 20px', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px' }}>Join Class</button>
          </div>
          <FaFire size={100} color="#6366f1" style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.3 }} />
       </div>

       {/* My Courses */}
       <h3 style={{ color: 'white', fontSize: '18px', marginBottom: '15px' }}>Continue Learning</h3>
       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {courses.map(course => (
             <div key={course.id} onClick={() => { setSelectedCourse(course); setCurrentLesson(0); setScreen('course'); }} style={{ display: 'flex', gap: '15px', padding: '15px', background: '#1e293b', borderRadius: '18px', border: '1px solid #334155', cursor: 'pointer' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `${course.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: course.color }}><FaPlay /></div>
                <div style={{ flex: 1 }}>
                   <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '15px' }}>{course.title}</h4>
                   <p style={{color:'#94a3b8', fontSize:'12px', margin:'0 0 8px 0'}}>{course.instructor}</p>
                   <div style={{ width: '100%', height: '5px', background: '#0f172a', borderRadius: '3px' }}>
                      <div style={{ width: `${course.progress}%`, height: '100%', background: course.color, borderRadius: '3px' }}></div>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  const CourseScreen = () => (
    <div className="slide-up" style={{ minHeight: '100%', background: '#0f172a', display:'flex', flexDirection:'column' }}>
       {/* Video Player Area */}
       <div style={{ height: '240px', background: isPlaying ? 'black' : selectedCourse.color, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink:0 }}>
          <button onClick={() => {setScreen('home'); setIsPlaying(false);}} style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.4)', border: 'none', color: 'white', width: '35px', height: '35px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}><FaChevronLeft /></button>
          
          {isPlaying ? (
             <div style={{textAlign:'center', width:'100%'}}>
                 <div onClick={() => setIsPlaying(false)} style={{cursor:'pointer'}}><FaPause size={30} color="white"/></div>
                 <p style={{color:'white', marginTop:'10px', fontSize:'12px'}}>Playing: {selectedCourse.lessons[currentLesson].title}</p>
             </div>
          ) : (
             <div onClick={() => setIsPlaying(true)} style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <FaPlay color="white" style={{ marginLeft: '3px' }} />
             </div>
          )}
          
          {/* Fake Progress Bar */}
          <div style={{position:'absolute', bottom:0, left:0, width:'100%', padding:'10px'}}>
             <div style={{display:'flex', justifyContent:'space-between', fontSize:'10px', color:'white', marginBottom:'5px'}}>
                <span>{isPlaying ? "12:30" : "00:00"}</span>
                <span>{selectedCourse.lessons[currentLesson].time}</span>
             </div>
             <div style={{width:'100%', height:'4px', background:'rgba(255,255,255,0.3)', borderRadius:'2px'}}>
                <div style={{width: isPlaying ? '35%' : '0%', height:'100%', background:'#fff'}}></div>
             </div>
          </div>
       </div>

       {/* Course Content */}
       <div style={{ flex:1, background: '#0f172a', borderRadius: '25px 25px 0 0', position: 'relative', top:'-20px', padding: '25px', display:'flex', flexDirection:'column' }}>
          <h2 style={{ color: 'white', fontSize: '20px', margin: 0, lineHeight:'1.4' }}>{selectedCourse.title}</h2>
          
          <div style={{display:'flex', alignItems:'center', gap:'15px', marginTop:'10px', marginBottom:'20px'}}>
             <span style={{color:'#fbbf24', fontSize:'12px', display:'flex', alignItems:'center', gap:'4px'}}><FaStar /> {selectedCourse.rating}</span>
             <span style={{color:'#94a3b8', fontSize:'12px'}}>{selectedCourse.students} Students</span>
          </div>

          {/* Tabs */}
          <div style={{display:'flex', gap:'20px', borderBottom:'1px solid #334155', paddingBottom:'10px', marginBottom:'20px'}}>
             {['Lessons', 'About', 'Reviews'].map(tab => (
                <div key={tab} onClick={() => setCourseTab(tab.toLowerCase())} style={{color: courseTab === tab.toLowerCase() ? 'white' : '#64748b', fontWeight:'600', paddingBottom:'10px', borderBottom: courseTab === tab.toLowerCase() ? `2px solid ${selectedCourse.color}` : 'none', cursor:'pointer'}}>
                   {tab}
                </div>
             ))}
          </div>

          {/* Tab Content */}
          <div style={{flex:1, overflowY:'auto'}}>
             {courseTab === 'lessons' ? (
                <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                   {selectedCourse.lessons.map((l, i) => (
                      <div key={l.id} onClick={() => { if(!l.locked) { setCurrentLesson(i); setIsPlaying(false); } }} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', borderRadius: '16px', background: i === currentLesson ? '#1e293b' : 'transparent', border: i === currentLesson ? `1px solid ${selectedCourse.color}` : '1px solid transparent', cursor: l.locked ? 'default' : 'pointer', opacity: l.locked ? 0.6 : 1 }}>
                         <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: i === currentLesson ? selectedCourse.color : '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize:'12px' }}>{i+1}</div>
                         <div style={{ flex: 1 }}>
                            <h4 style={{ color: i === currentLesson ? 'white' : '#94a3b8', margin: 0, fontSize: '14px' }}>{l.title}</h4>
                            <p style={{ color: '#64748b', margin: '2px 0 0 0', fontSize: '11px' }}>{l.time}</p>
                         </div>
                         {l.locked ? <FaLock size={12} color="#64748b" /> : i === currentLesson ? <FaFire size={12} color={selectedCourse.color}/> : <FaCircle size={8} color="#334155"/>}
                      </div>
                   ))}
                </div>
             ) : (
                <div style={{color:'#94a3b8', fontSize:'14px', lineHeight:'1.6'}}>
                   <p>{selectedCourse.desc}</p>
                   <p style={{marginTop:'10px'}}>Instructor: <span style={{color:'white'}}>{selectedCourse.instructor}</span></p>
                </div>
             )}
          </div>
       </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="fade-in" style={{ padding: '30px 25px', color:'white' }}>
       <h2 style={{ marginBottom: '30px' }}>My Account</h2>
       <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'30px'}}>
          <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'#334155', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>KP</div>
          <div>
             <h3 style={{margin:0, fontSize:'20px'}}>Kasun Perera</h3>
             <p style={{color:'#94a3b8', fontSize:'14px'}}>Student Member</p>
          </div>
       </div>
       
       <div style={{display:'flex', gap:'15px', marginBottom:'30px'}}>
          <div style={{flex:1, background:'#1e293b', padding:'15px', borderRadius:'15px', textAlign:'center'}}>
             <div style={{color:'#6366f1', fontSize:'20px', fontWeight:'bold'}}>12</div>
             <div style={{fontSize:'11px', color:'#94a3b8'}}>Courses</div>
          </div>
          <div style={{flex:1, background:'#1e293b', padding:'15px', borderRadius:'15px', textAlign:'center'}}>
             <div style={{color:'#22c55e', fontSize:'20px', fontWeight:'bold'}}>85%</div>
             <div style={{fontSize:'11px', color:'#94a3b8'}}>Avg. Score</div>
          </div>
       </div>
    </div>
  );

  return (
    <MobileFrame appName="EduLanka" onBack={onBack} appColor="#6366f1">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0f172a' }}>
        
        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
            {screen === 'home' ? (
                <>
                {activeTab === 'home' && <HomeScreen />}
                {activeTab === 'courses' && <HomeScreen />} {/* Reusing Home for Demo */}
                {activeTab === 'profile' && <ProfileScreen />}
                </>
            ) : <CourseScreen />}
        </div>

        {/* Fixed Navbar */}
        {screen === 'home' && (
            <div className="glass-nav" style={{ 
                position: 'relative', height: '70px', background: 'rgba(30, 41, 59, 0.9)', 
                borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', 
                justifyContent: 'space-around', alignItems: 'center', flexShrink: 0 
            }}>
                <div onClick={() => setActiveTab('home')} style={{color: activeTab === 'home' ? '#6366f1' : '#64748b', fontSize:'22px', cursor:'pointer'}}><FaHome /></div>
                <div onClick={() => setActiveTab('courses')} style={{color: activeTab === 'courses' ? '#6366f1' : '#64748b', fontSize:'22px', cursor:'pointer'}}><FaBook /></div>
                <div onClick={() => setActiveTab('profile')} style={{color: activeTab === 'profile' ? '#6366f1' : '#64748b', fontSize:'22px', cursor:'pointer'}}><FaUser /></div>
            </div>
        )}
      </div>
    </MobileFrame>
  );
};

export default EduAppDemo;