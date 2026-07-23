import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function MeetDoctors() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
              Decades of Expertise.<br />One Shared Goal.
            </h2>
            <blockquote className="border-l-4 border-gold-500 pl-4 py-1 mb-8 italic text-lg text-navy-800 font-serif max-w-2xl mx-auto">
              "To provide you with the very best in quality dental care and superior customer service."
            </blockquote>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dr. Blackburn II */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center shrink-0">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900">Dr. B.A. Blackburn II</h3>
                <p className="text-gold-500 font-medium">Restorative Dentist & Prosthodontist</p>
              </div>
            </div>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>
                Dr. Blackburn was inspired to pursue dentistry by his uncle. He received his Bachelor's Degree in Biology and Chemistry from Morehouse in 1961, and graduated from Meharry Medical College with a Doctor of Dental Science.
              </p>
              <p>
                After receiving his Postgraduate Certificate in Prosthodontics from New York University's College of Dentistry, Dr. Blackburn opened up his own dentistry practice in 1970 in Downtown Atlanta. In 2002, his son joined the practice, forming a dedicated father-and-son team.
              </p>
              <p>
                An expert in his field, he has taught at Emory University and the Medical College of Georgia School of Dentistry. He was a member of the American Board of Prosthodontics from 1976 to 2000 and served as president of the Northern District Dental Society (ADA). Dr. Blackburn is also a retired colonel in the U.S. Army Reserves.
              </p>
            </div>
          </motion.div>

          {/* Dr. Blackburn III */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center shrink-0">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900">Dr. B.A. Blackburn III</h3>
                <p className="text-gold-500 font-medium">Prosthodontist</p>
              </div>
            </div>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>
                Dr. Blackburn III graduated from Morehouse College in 1993. Upon graduation, he was commissioned as an Army Officer and still serves as a Lt. Colonel in the Reserves. Following his father's footsteps, he received his DDS in 1999 from the University of Iowa's College of Dentistry.
              </p>
              <p>
                He received his Post Graduate Specialty Certificate in Prosthodontics in 2002 from the Medical College of Georgia's School of Dentistry. He has treated adult patients of all ages, including various celebrities, and has even coined his own term for his work: "prosthoesthetics."
              </p>
              <p>
                Dr. Blackburn is a member of the Hinman Dental Society, Georgia Dental Society, ADA, National Dental Association, and American College of Prosthodontics. In his spare time, he enjoys studying history, traveling, outdoor water activities, and mentoring youth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
