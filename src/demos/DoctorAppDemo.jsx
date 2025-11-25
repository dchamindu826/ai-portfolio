import React, { useState } from 'react';
import MobileFrame from '../components/MobileFrame';
import { 
  FaHome, FaCalendarAlt, FaUser, FaSearch, FaMapMarkerAlt, 
  FaStar, FaChevronLeft, FaClock, FaCheckCircle, FaHeart, 
  FaTooth, FaChevronRight, FaStethoscope, FaFilter, FaBell 
} from 'react-icons/fa';

const DoctorAppDemo = ({ onBack }) => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('home');
  const [screen, setScreen] = useState('main'); // main, details, booking, success
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Booking Logic
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Advanced Mock Data
  const categories = [
    { name: "All", icon: <FaStethoscope />, color: "#6366f1", bg: "#e0e7ff" },
    { name: "Cardio", icon: <FaHeart />, color: "#ef4444", bg: "#fee2e2" },
    { name: "Dental", icon: <FaTooth />, color: "#3b82f6", bg: "#dbeafe" }
  ];

  const allDoctors = [
    { id: 1, name: "Dr. Sarah Smith", type: "Cardio", title: "Cardiologist", loc: "Asiri Central", rate: 4.9, reviews: 120, exp: "10 Yrs", img: "68", desc: "Specialist in heart rhythm disorders and cardiovascular disease prevention." },
    { id: 2, name: "Dr. James Doe", type: "Neurologist", title: "Neurologist", loc: "Nawaloka", rate: 4.8, reviews: 85, exp: "8 Yrs", img: "32", desc: "Expert in treating migraines, epilepsy, and other nervous system disorders." },
    { id: 3, name: "Dr. Emily Rose", type: "Dental", title: "Dentist", loc: "Durdans", rate: 5.0, reviews: 200, exp: "12 Yrs", img: "44", desc: "Cosmetic dentistry specialist focused on smile makeovers and implants." },
    { id: 4, name: "Dr. Mark Alan", type: "Cardio", title: "Surgeon", loc: "Lanka Hospital", rate: 4.7, reviews: 90, exp: "15 Yrs", img: "11", desc: "Senior surgeon with extensive experience in bypass surgeries." },
  ];

  // Filter Doctors
  const filteredDoctors = selectedCategory === 'All' 
    ? allDoctors 
    : allDoctors.filter(doc => doc.type === selectedCategory);

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      const newBooking = {
        ...selectedDoc,
        date: `Oct ${selectedDate}`,
        time: selectedTime,
        status: 'Upcoming'
      };
      setAppointments([...appointments, newBooking]);
      setScreen('success');
    }
  };

  // --- SCREENS ---

  const HomeScreen = () => (
    <div className="fade-in" style={{ padding: '20px' }}>
       {/* Header */}
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginTop: '10px' }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '12px' }}><FaMapMarkerAlt color="#0d9488" /> Colombo, SL</div>
             <h2 style={{ margin: '5px 0 0 0', fontSize: '24px', color: '#1e293b' }}>Find Specialist</h2>
          </div>
          <div style={{position:'relative'}}>
             <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{ width: '45px', height: '45px', borderRadius: '12px', border:'2px solid white', boxShadow:'0 2px 10px rgba(0,0,0,0.1)' }} alt="" />
             <div style={{position:'absolute', bottom:0, right:0, width:'12px', height:'12px', background:'#22c55e', borderRadius:'50%', border:'2px solid white'}}></div>
          </div>
       </div>

       {/* Search Bar */}
       <div style={{ background: 'white', padding: '15px', borderRadius: '16px', display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <FaSearch color="#cbd5e1" />
          <input type="text" placeholder="Search doctor, issue..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color:'#334155' }} />
          <FaFilter color="#6366f1" />
       </div>

       {/* Categories */}
       <div style={{ display: 'flex', gap: '12px', marginBottom: '25px', overflowX:'auto', paddingBottom:'5px' }}>
          {categories.map((c, i) => (
             <div key={i} onClick={() => setSelectedCategory(c.name)} style={{ minWidth:'80px', padding:'15px 10px', background: selectedCategory === c.name ? '#0d9488' : 'white', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', cursor:'pointer', transition:'all 0.3s' }}>
                <div style={{ color: selectedCategory === c.name ? 'white' : c.color, fontSize: '20px' }}>{c.icon}</div>
                <span style={{ fontSize: '11px', fontWeight: '600', color: selectedCategory === c.name ? 'white' : '#64748b' }}>{c.name}</span>
             </div>
          ))}
       </div>

       {/* Doctors List */}
       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px'}}>
          <h3 style={{fontSize:'18px', color:'#1e293b'}}>Top Doctors</h3>
          <span style={{fontSize:'12px', color:'#0d9488', fontWeight:'bold'}}>See All</span>
       </div>
       
       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredDoctors.map((doc) => (
             <div key={doc.id} onClick={() => { setSelectedDoc(doc); setScreen('details'); }} style={{ background: 'white', padding: '15px', borderRadius: '20px', display: 'flex', gap: '15px', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', cursor: 'pointer', transition:'transform 0.2s' }}>
                <img src={`https://randomuser.me/api/portraits/${doc.id % 2 === 0 ? 'men' : 'women'}/${doc.img}.jpg`} style={{ width: '70px', height: '70px', borderRadius: '18px', objectFit: 'cover' }} alt="" />
                <div style={{ flex: 1 }}>
                   <h4 style={{ margin: 0, color: '#1e293b', fontSize:'16px' }}>{doc.name}</h4>
                   <p style={{ margin: '4px 0', fontSize: '12px', color: '#64748b' }}>{doc.title} • {doc.loc}</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#f59e0b', fontWeight:'bold' }}><FaStar /> {doc.rate} <span style={{color:'#cbd5e1', fontWeight:'normal'}}>({doc.reviews} Reviews)</span></div>
                </div>
                <div style={{background:'#f0fdfa', padding:'10px', borderRadius:'12px'}}><FaChevronRight color="#0d9488" /></div>
             </div>
          ))}
       </div>
    </div>
  );

  const DoctorDetailsScreen = () => (
    <div className="slide-up" style={{ background:'white', minHeight:'100%' }}>
       {/* Doctor Image Header */}
       <div style={{ height:'250px', position:'relative' }}>
          <img src={`https://randomuser.me/api/portraits/${selectedDoc.id % 2 === 0 ? 'men' : 'women'}/${selectedDoc.img}.jpg`} style={{width:'100%', height:'100%', objectFit:'cover'}} />
          <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)'}}></div>
          <button onClick={() => setScreen('main')} style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', border: 'none', padding: '10px', borderRadius: '12px', cursor:'pointer' }}><FaChevronLeft /></button>
       </div>

       {/* Details Content */}
       <div style={{ marginTop:'-30px', background:'white', borderRadius:'30px 30px 0 0', padding:'25px', position:'relative' }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
               <h2 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize:'22px' }}>{selectedDoc.name}</h2>
               <p style={{ color: '#0d9488', fontWeight: '600', margin: 0 }}>{selectedDoc.title}</p>
            </div>
            <div style={{background:'#fffbeb', color:'#d97706', padding:'5px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold', display:'flex', alignItems:'center', gap:'4px'}}><FaStar /> {selectedDoc.rate}</div>
          </div>

          <p style={{color:'#64748b', fontSize:'14px', lineHeight:'1.6', marginTop:'15px'}}>{selectedDoc.desc}</p>

          {/* Stats */}
          <div style={{display:'flex', gap:'15px', marginTop:'20px', marginBottom:'30px'}}>
             <div style={{flex:1, background:'#f8fafc', padding:'15px', borderRadius:'15px', textAlign:'center'}}>
                <div style={{color:'#0d9488', fontWeight:'bold', fontSize:'18px'}}>{selectedDoc.reviews}+</div>
                <div style={{fontSize:'12px', color:'#64748b'}}>Patients</div>
             </div>
             <div style={{flex:1, background:'#f8fafc', padding:'15px', borderRadius:'15px', textAlign:'center'}}>
                <div style={{color:'#0d9488', fontWeight:'bold', fontSize:'18px'}}>{selectedDoc.exp}</div>
                <div style={{fontSize:'12px', color:'#64748b'}}>Experience</div>
             </div>
          </div>

          <button onClick={() => setScreen('booking')} style={{ width: '100%', padding: '18px', background: '#0d9488', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', fontSize:'16px', boxShadow:'0 10px 20px rgba(13, 148, 136, 0.3)' }}>Book Appointment</button>
       </div>
    </div>
  );

  const BookingScreen = () => (
    <div className="slide-up" style={{ padding: '25px', display:'flex', flexDirection:'column', height:'100%' }}>
       <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'20px'}}>
         <button onClick={() => setScreen('details')} style={{ background: '#f1f5f9', border: 'none', padding: '10px', borderRadius: '12px' }}><FaChevronLeft /></button>
         <h3 style={{margin:0}}>Select Schedule</h3>
       </div>

       <h4 style={{marginBottom:'15px', color:'#334155'}}>October 2025</h4>
       <div style={{ display: 'flex', gap: '10px', paddingBottom: '20px', overflowX:'auto' }}>
          {[24, 25, 26, 27, 28].map(d => (
             <div key={d} onClick={() => setSelectedDate(d)} style={{ minWidth:'70px', padding: '15px 0', borderRadius: '15px', background: selectedDate === d ? '#0d9488' : 'white', color: selectedDate === d ? 'white' : '#333', border: selectedDate === d ? 'none' : '1px solid #e2e8f0', textAlign:'center', cursor:'pointer', transition:'all 0.2s' }}>
                <span style={{fontSize:'12px', opacity:0.7}}>Mon</span><br/>
                <span style={{fontSize:'18px', fontWeight:'bold'}}>{d}</span>
             </div>
          ))}
       </div>

       <h4 style={{marginBottom:'15px', color:'#334155'}}>Available Time</h4>
       <div style={{ display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: '10px', paddingBottom: '20px' }}>
          {["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map(t => (
             <div key={t} onClick={() => setSelectedTime(t)} style={{ padding: '12px', borderRadius: '10px', background: selectedTime === t ? '#f0fdfa' : 'white', color: selectedTime === t ? '#0d9488' : '#64748b', border: selectedTime === t ? '1px solid #0d9488' : '1px solid #e2e8f0', textAlign:'center', fontSize:'12px', fontWeight:'bold', cursor:'pointer' }}>{t}</div>
          ))}
       </div>

       <div style={{marginTop:'auto'}}>
         <button onClick={handleBook} disabled={!selectedDate || !selectedTime} style={{ width: '100%', padding: '18px', background: selectedDate && selectedTime ? '#0d9488' : '#cbd5e1', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', fontSize:'16px' }}>Confirm Booking</button>
       </div>
    </div>
  );

  const SuccessScreen = () => (
    <div className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', textAlign:'center' }}>
       <div style={{width:'100px', height:'100px', background:'#f0fdfa', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px'}}>
         <FaCheckCircle size={50} color="#0d9488" />
       </div>
       <h2 style={{ color: '#1e293b', marginBottom:'10px' }}>Appointment Booked!</h2>
       <p style={{color:'#64748b', fontSize:'14px'}}>Your appointment with <strong>{selectedDoc?.name}</strong> has been successfully scheduled.</p>
       <button onClick={() => { setScreen('main'); setActiveTab('schedule'); }} style={{ width: '100%', padding: '16px', background: '#1e293b', color: 'white', border: 'none', borderRadius: '16px', fontWeight: 'bold', marginTop: '40px' }}>View My Schedule</button>
    </div>
  );

  const ScheduleScreen = () => (
    <div className="fade-in" style={{ padding: '25px' }}>
       <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>My Appointments</h2>
       {appointments.length === 0 ? (
          <div style={{textAlign:'center', marginTop:'50px', color:'#94a3b8'}}>
             <FaCalendarAlt size={40} style={{opacity:0.3, marginBottom:'15px'}} />
             <p>No upcoming appointments.</p>
          </div>
       ) : (
          appointments.map((b, i) => (
             <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '20px', borderLeft: '5px solid #0d9488', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', marginBottom: '15px' }}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                   <h4 style={{ margin: 0, color: '#1e293b' }}>{b.name}</h4>
                   <span style={{background:'#f0fdfa', color:'#0d9488', padding:'2px 8px', borderRadius:'6px', fontSize:'10px', fontWeight:'bold', height:'fit-content'}}>CONFIRMED</span>
                </div>
                <p style={{fontSize:'12px', color:'#64748b', marginBottom:'15px'}}>{b.title} • {b.loc}</p>
                <div style={{ display: 'flex', gap: '15px', color: '#334155', fontSize:'13px', borderTop:'1px solid #f1f5f9', paddingTop:'10px' }}>
                   <span style={{display:'flex', alignItems:'center', gap:'5px'}}><FaCalendarAlt color="#0d9488"/> {b.date}</span>
                   <span style={{display:'flex', alignItems:'center', gap:'5px'}}><FaClock color="#0d9488"/> {b.time}</span>
                </div>
             </div>
          ))
       )}
    </div>
  );

  const ProfileScreen = () => (
    <div className="fade-in" style={{ padding: '30px 25px' }}>
       <h2 style={{ color: '#1e293b', marginBottom: '30px' }}>My Profile</h2>
       <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'30px'}}>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{width:'80px', height:'80px', borderRadius:'50%'}} />
          <div>
             <h3 style={{margin:0, fontSize:'20px'}}>Kasun Perera</h3>
             <p style={{color:'#64748b', fontSize:'14px'}}>kasun@example.com</p>
          </div>
       </div>
       
       {['Personal Information', 'Payment Methods', 'Medical Records', 'Settings'].map((item, i) => (
          <div key={i} style={{padding:'15px', background:'white', borderRadius:'15px', marginBottom:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', color:'#334155', cursor:'pointer'}}>
             {item} <FaChevronRight size={12} color="#cbd5e1" />
          </div>
       ))}
    </div>
  );

  return (
    <MobileFrame appName="MediConnect" onBack={onBack} appColor="#0d9488">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAFC' }}>
        
        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
            {screen === 'main' ? (
                <>
                {activeTab === 'home' && <HomeScreen />}
                {activeTab === 'schedule' && <ScheduleScreen />}
                {activeTab === 'profile' && <ProfileScreen />}
                </>
            ) : screen === 'details' ? <DoctorDetailsScreen />
              : screen === 'booking' ? <BookingScreen /> 
              : <SuccessScreen />}
        </div>

        {/* Fixed Navbar */}
        {screen === 'main' && (
            <div className="glass-nav" style={{ 
                position: 'relative', height: '70px', background: 'white', borderTop: '1px solid #f1f5f9',
                display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexShrink: 0 
            }}>
                <div onClick={() => setActiveTab('home')} style={{color: activeTab === 'home' ? '#0d9488' : '#94a3b8', fontSize:'22px', cursor:'pointer'}}><FaHome /></div>
                <div onClick={() => setActiveTab('schedule')} style={{color: activeTab === 'schedule' ? '#0d9488' : '#94a3b8', fontSize:'22px', cursor:'pointer'}}><FaCalendarAlt /></div>
                <div onClick={() => setActiveTab('profile')} style={{color: activeTab === 'profile' ? '#0d9488' : '#94a3b8', fontSize:'22px', cursor:'pointer'}}><FaUser /></div>
            </div>
        )}
      </div>
    </MobileFrame>
  );
};

export default DoctorAppDemo;