import React, { memo } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = memo(() => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Start Your Journey</h2>
          <p className="text-slate-600">Visit our office or send us a message. Your dream awaits.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#0A2647] mb-6">Nepal Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#146C94]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">2nd Floor, Kalyan Complex</p>
                    <p className="text-slate-600">Putalisadak, Kathmandu</p>
                    <p className="text-slate-500">(In between NAME & Vibrant)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#146C94]">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 mb-3">Contact us on WhatsApp</p>
                    <a 
                      href="https://wa.me/9779851057227?text=Hello%2C%20I%20am%20interested%20in%20studying%20in%20Bangladesh.%20Can%20you%20provide%20more%20information%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5A] transition-all font-semibold text-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      +977 9851057227 (Nepal)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#0A2647] mb-6">Bangladesh Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#146C94]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">InterContinental Dhaka</p>
                    <p className="text-slate-600">3rd Floor, Annex Building</p>
                    <p className="text-slate-600">G, 1 Minto Rd, Shahbag</p>
                    <p className="text-slate-500">Dhaka 1000, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#146C94]">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 mb-3">Contact us on WhatsApp</p>
                    <a 
                      href="https://wa.me/8801715059957?text=Hello%2C%20I%20am%20interested%20in%20studying%20in%20Bangladesh.%20Can%20you%20provide%20more%20information%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5A] transition-all font-semibold text-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      +880 1715059957 (Bangladesh)
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#146C94]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">studentshelpine.com@gmail.com</p>
                    <p className="text-slate-500">Reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#146C94] p-8 rounded-2xl shadow-lg text-white">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Clock size={20} /> Office Hours
               </h3>
               <div className="space-y-2">
                 <div className="flex justify-between border-b border-white/20 pb-2">
                   <span>Sunday - Friday</span>
                   <span>9:30 AM - 6:00 PM</span>
                 </div>
                 <div className="flex justify-between pt-2">
                   <span>Saturday</span>
                   <span>11:00 AM - 3:00 PM</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-[#0A2647] mb-6">Free Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#146C94] focus:ring-1 focus:ring-[#146C94] outline-none transition-all" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#146C94] focus:ring-1 focus:ring-[#146C94] outline-none transition-all" placeholder="98XXXXXXXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Interested Course</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#146C94] focus:ring-1 focus:ring-[#146C94] outline-none transition-all bg-white">
                    <option>MBBS</option>
                    <option>BDS (Dental)</option>
                    <option>Engineering</option>
                    <option>Agriculture</option>
                  </select>
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Current GPA / Percentage</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#146C94] focus:ring-1 focus:ring-[#146C94] outline-none transition-all" placeholder="e.g. 3.6 GPA or 85%" />
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#146C94] focus:ring-1 focus:ring-[#146C94] outline-none transition-all h-32 resize-none" placeholder="Tell us about your preferences..."></textarea>
              </div>

              <button className="w-full bg-[#F2672E] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#d9551e] transition-all shadow-md">
                Book Appointment
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});