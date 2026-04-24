import { motion } from "motion/react";
import { Phone, Printer, MapPin, Award, MessageCircle, UserPlus, Globe, ChevronRight } from "lucide-react";

export default function App() {
  const doctorInfo = {
    name: "Dr. M.M. Sibeko",
    qualifications: "MBChB (UKZN)",
    licenseNo: "0565873",
    contacts: {
      telefax: "034 212 2442",
      cell: "072 622 0505",
    },
    address: "11 Victoria Street, Dundee 3000",
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dr. M.M. Sibeko
ORG:Medical Practice
TITLE:Medical Practitioner
TEL;TYPE=CELL:${doctorInfo.contacts.cell}
TEL;TYPE=FAX:${doctorInfo.contacts.telefax}
ADR;TYPE=WORK:;;11 Victoria Street;Dundee;;3000;South Africa
NOTE:License No: ${doctorInfo.licenseNo}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Dr_MM_Sibeko.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-medical-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:32px_32px]" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full border-4 border-white shadow-2xl overflow-hidden mb-6 bg-medical-800">
            <img
              src="/Dr Sibeko.jpg"
              alt={doctorInfo.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-2"
          >
            {doctorInfo.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-medical-200 text-lg md:text-xl font-medium tracking-widest uppercase"
          >
            {doctorInfo.qualifications}
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Action Bar (Floating on Mobile) */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-medical-100 py-4 px-4 flex justify-center gap-4">
        <a
          href={`tel:${doctorInfo.contacts.cell.replace(/\s+/g, '')}`}
          className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-3 bg-medical-700 text-white rounded-full font-bold shadow-lg shadow-medical-700/20 hover:bg-medical-800 transition-all active:scale-95"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href={`https://wa.me/${doctorInfo.contacts.cell.replace(/\s+/g, '').replace('0', '27')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-medical-600 uppercase tracking-[0.2em] mb-6">Professional Details</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 rounded-3xl bg-medical-50 border border-medical-100 group transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-medical-700 shadow-sm group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-medical-800/40">Licensing</p>
                    <p className="text-medical-900 font-bold">HPCSA Registration #{doctorInfo.licenseNo}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 group transition-all line-clamp-1">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-medical-700 shadow-sm group-hover:scale-110 transition-transform">
                    <Printer size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Telefax</p>
                    <p className="text-slate-900 font-bold">{doctorInfo.contacts.telefax}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 group transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-medical-700 shadow-sm group-hover:scale-110 transition-transform">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Digital Card</p>
                    <p className="text-slate-900 font-bold">ais-sibeko-profile.com</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownloadVCard}
              className="w-full flex items-center justify-between p-6 bg-medical-900 text-white rounded-3xl font-bold shadow-2xl shadow-medical-900/40 hover:bg-medical-800 transition-all group"
            >
              <div className="flex items-center gap-4">
                <UserPlus size={24} />
                <span>Save to Contacts</span>
              </div>
              <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Location Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-medical-600 uppercase tracking-[0.2em]">Our Location</h2>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl">
              <div className="p-6 border-b border-slate-50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">{doctorInfo.address}</p>
                  <p className="text-slate-500 text-sm">Dundee, KwaZulu-Natal</p>
                </div>
              </div>
              
              <div className="aspect-[4/3] relative group">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  title="Practice Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(doctorInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-medical-900/10 pointer-events-none group-hover:bg-transparent transition-colors" />
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(doctorInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-medical-900 h-11 px-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-medical-50 transition-all scale-100 active:scale-95"
                  >
                    <MapPin size={18} className="text-medical-600" />
                    <span>Google Maps</span>
                  </a>
                  <a
                    href={`https://www.waze.com/ul?q=${encodeURIComponent(doctorInfo.address)}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 w-11 h-11 rounded-xl shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all active:scale-95"
                    title="Open in Waze"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19.141 12.871a3.864 3.864 0 0 1-7.728 0c0-2.133 1.732-3.864 3.864-3.864 1.83 0 3.336 1.258 3.733 2.95h1.162a4.996 4.996 0 0 0-4.895-4.085c-2.76 0-5 2.24-5 5s2.24 5 5 5a4.996 4.996 0 0 0 4.895-4.086h-1.162zM3.464 10.464h.01a.341.341 0 0 0 0-.683h-.01c-.19 0-.341.15-.341.341s.152.342.341.342zm1.707 0h.01a.341.341 0 0 0 0-.683h-.01a.341.341 0 0 0 0 .683zm1.707 0h.01a.341.341 0 0 0 0-.683h-.01a.341.341 0 0 0 0 .683zm7.042-6.6a1.275 1.275 0 0 1 .63 2.378l.455.787a.341.341 0 0 0 .59-.341l-.455-.788c1.374-.633 1.956-2.28 1.323-3.654C15.42.473 13.774-.11 12.4.523a2.53 2.53 0 0 0-1.25 3.328l-.456.788a.341.341 0 1 0 .591.341l.455-.788a1.274 1.274 0 0 1 2.173-1.341zM23.116 11c0-1.879-.691-3.645-1.944-4.974a.341.341 0 1 0-.501.464 6.136 6.136 0 0 1 1.762 4.51c0 3.424-2.784 6.21-6.208 6.21-1.462 0-2.834-.51-3.923-1.432a.341.341 0 1 0-.441.52A7.545 7.545 0 0 0 16.225 18c4.137 0 7.545-3.4 7.545-7.545 0-.153-.005-.306-.015-.458l-.123-.003c.123 0 .223.1.223.224v.223a.341.341 0 0 0 .682 0v-.223c0-.498-.406-.902-.904-.902z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-medical-900 font-bold text-xl mb-1">Dr. M.M. Sibeko</p>
            <p className="text-slate-500 text-sm">© 2026 Professional Medical Services</p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <span className="text-[10px] font-bold">KZN</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <span className="text-[10px] font-bold">SA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
