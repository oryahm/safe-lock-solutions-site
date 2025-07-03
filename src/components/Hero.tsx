
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "ניסיון של שנים בפריצה והתקנה",
    "שירות מהיר ותגובה בזמן אמת",
    "פתרון כולל – מכירה, התקנה, פריצה, תיקון",
    "אמينות ומקצועיות בלתי מתפשרת",
    "התאמה אישית לפי הצורך שלך"
  ];

  return (
    <section id="hero" className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/5371994a-ea13-4b33-a94e-dd79a9caec70.png" 
            alt="Safe Lock Logo"
            className="w-32 h-32 mx-auto mb-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          כספות בטוחות לעסקים ובעלי נשק
          <br />
          <span className="text-blue-900">אבטחה מקצועית ושקט נפשי</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          השאירו פרטים עכשיו לקבלת הצעה מותאמת אישית – כולל שירות פריצה במידת הצורך
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-16"
        >
          אני רוצה הצעת מחיר
        </Button>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">למה לבחור ב-Safe Lock?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-right">
                <span className="text-green-600 font-bold text-xl ml-3">✅</span>
                <span className="text-lg text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/81d36e54-4b6a-4d77-b1d8-46d24f0740b3.png" 
              alt="כספת דיגיטלית"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-slate-900">כספות דיגיטליות</h3>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/bb354413-7d07-4641-8332-7220888d2d05.png" 
              alt="כספת פתוחה"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-slate-900">התקנה מקצועית</h3>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/61f3df2a-fc42-47bd-8731-f2b50bd08e3c.png" 
              alt="כספת מודרנית"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-slate-900">טכנולוגיה מתקדמת</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
