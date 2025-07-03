
import { Shield, Flame, Smartphone, Building, Home, Key } from "lucide-react";

const SafeTypes = () => {
  const safeTypes = [
    {
      title: "כספת לאקדח ונשק",
      description: "כספות מיוחדות לאחסון בטוח של נשק אישי",
      icon: Shield,
      image: "/lovable-uploads/81d36e54-4b6a-4d77-b1d8-46d24f0740b3.png"
    },
    {
      title: "כספת חסינת אש",
      description: "הגנה מפני שריפה ונזק חום",
      icon: Flame,
      image: "/lovable-uploads/bb354413-7d07-4641-8332-7220888d2d05.png"
    },
    {
      title: "כספת דיגיטלית",
      description: "נעילה אלקטרונית מתקדמת עם קוד",
      icon: Smartphone,
      image: "/lovable-uploads/61f3df2a-fc42-47bd-8731-f2b50bd08e3c.png"
    },
    {
      title: "כספת משרדית",
      description: "מתאימה לעסקים ומשרדים",
      icon: Building,
      image: "/lovable-uploads/81d36e54-4b6a-4d77-b1d8-46d24f0740b3.png"
    },
    {
      title: "כספת ביתית",
      description: "פתרון מושלם לבית הפרטי",
      icon: Home,
      image: "/lovable-uploads/bb354413-7d07-4641-8332-7220888d2d05.png"
    },
    {
      title: "כספת מפתחות",
      description: "לאחסון מפתחות באופן מאובטח",
      icon: Key,
      image: "/lovable-uploads/61f3df2a-fc42-47bd-8731-f2b50bd08e3c.png"
    }
  ];

  return (
    <section id="safes" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            סוגי הכספות שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מגוון רחב של כספות איכותיות לכל צורך ותקציב
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeTypes.map((safe, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <safe.icon className="w-8 h-8 text-blue-900 ml-3" />
                <h3 className="text-xl font-semibold text-slate-900">{safe.title}</h3>
              </div>
              <img 
                src={safe.image} 
                alt={safe.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-slate-600 leading-relaxed">{safe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeTypes;
