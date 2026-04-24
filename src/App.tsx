import { motion } from "motion/react";
import { Phone, Printer, MapPin, Award, ExternalLink, MessageCircle, ClipboardCheck } from "lucide-react";

export default function App() {
  const doctorInfo = {
    name: "Dr. M.M. Sibeko",
    qualifications: "MBChB (UKZN)",
    licenseNo: "0565873",
    contacts: {
      telefax: "034 212 2442",
      cell: "072 622 0505",
    },
    address: "11 Victoria Street, Dundee 300",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-12 bg-natural-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-white shadow-[0_35px_60px_-15px_rgba(107,114,128,0.1)] rounded-[3rem] md:rounded-[60px] overflow-hidden flex flex-col md:flex-row min-h-[550px]"
      >
        {/* Left Section: Profile/Visual */}
        <div className="w-full md:w-2/5 bg-natural-700 flex items-center justify-center p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative w-48 h-48 md:w-full md:h-full max-h-80 aspect-square rounded-[2rem] md:rounded-[40px] border-8 border-white/20 flex items-center justify-center bg-natural-600 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&h=600&auto=format&fit=crop"
              alt={doctorInfo.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-between bg-white">
          <header>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-natural-900 text-4xl md:text-5xl font-light mb-2 font-serif">
                {doctorInfo.name}
              </h1>
              <p className="text-natural-700 font-semibold tracking-widest text-xs uppercase mb-10 pb-2 border-b border-natural-100 flex items-center gap-2">
                {doctorInfo.qualifications} <span className="text-natural-200">|</span> General Practitioner
              </p>
            </motion.div>

            <div className="grid gap-6">
              <div className="flex items-center space-x-5 group">
                <div className="w-12 h-12 rounded-2xl bg-natural-100 flex items-center justify-center text-natural-700 group-hover:bg-natural-700 group-hover:text-white transition-all duration-300">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-natural-600/50 font-bold">Cellular</p>
                  <a href={`tel:${doctorInfo.contacts.cell.replace(/\s+/g, '')}`} className="text-natural-900 font-medium hover:text-natural-700">
                    {doctorInfo.contacts.cell}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="w-12 h-12 rounded-2xl bg-natural-100 flex items-center justify-center text-natural-700 group-hover:bg-natural-700 group-hover:text-white transition-all duration-300">
                  <Printer size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-natural-600/50 font-bold">Telefax</p>
                  <p className="text-natural-900 font-medium">{doctorInfo.contacts.telefax}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 rounded-2xl bg-natural-100 flex items-center justify-center text-natural-700 group-hover:bg-natural-700 group-hover:text-white transition-all duration-300 mt-1">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-natural-600/50 font-bold">Address</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctorInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-natural-900 font-medium hover:text-natural-700 line-clamp-2 md:line-clamp-none max-w-xs"
                  >
                    {doctorInfo.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <a
                href={`tel:${doctorInfo.contacts.cell.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-4 bg-natural-700 text-white rounded-2xl font-bold shadow-lg shadow-natural-700/20 hover:bg-natural-800 transition-all active:scale-95"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${doctorInfo.contacts.cell.replace(/\s+/g, '').replace('0', '27')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-natural-50 border border-natural-200 text-natural-700 rounded-2xl font-bold hover:bg-natural-100 transition-all active:scale-95"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => {
                alert("Contact functionality: In a real app, this would download a VCard (.vcf) file.");
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-natural-100 text-natural-700 rounded-2xl font-bold hover:bg-natural-200 transition-all active:scale-95"
            >
              <ClipboardCheck size={18} />
              Save Contact
            </button>
          </header>

          <footer className="mt-12 pt-8 border-t border-natural-100 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
            <div className="px-5 py-3 bg-natural-100 rounded-2xl">
              <span className="text-[10px] uppercase tracking-widest text-natural-700 font-bold block mb-1">License No.</span>
              <span className="text-natural-900 font-mono tracking-tight text-lg">#{doctorInfo.licenseNo}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-natural-700 opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-natural-700 opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-natural-700 opacity-60"></div>
              </div>
              <div className="absolute top-8 right-8 text-[10px] text-natural-700 opacity-20 uppercase tracking-[0.4em] hidden md:block vertical-text pointer-events-none">
                Sibeko Medical
              </div>
            </div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}
