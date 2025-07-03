
const Clients = () => {
  const clients = [
    {
      name: "אוניברסיטת תל אביב",
      logo: "🏛️"
    },
    {
      name: "בנק הפועלים",
      logo: "🏦"
    },
    {
      name: "משטרת ישראל",
      logo: "👮‍♂️"
    },
    {
      name: "איכילוב",
      logo: "🏥"
    },
    {
      name: "חברת החשמל",
      logo: "⚡"
    },
    {
      name: "עיריית תל אביב",
      logo: "🏛️"
    },
    {
      name: "מכבי שירותי בריאות",
      logo: "🏥"
    },
    {
      name: "אלביט מערכות",
      logo: "🔧"
    }
  ];

  return (
    <section id="clients" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            הלקוחות שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מאות לקוחות מרוצים סומכים עלינו לאבטחת הנכסים החשובים ביותר שלהם
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-3">{client.logo}</div>
              <h3 className="text-sm font-medium text-slate-700">{client.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 font-medium">
            "Safe Lock תוכל לדאוג לביטחון שלך"
          </p>
          <p className="text-slate-500 mt-2">מאות לקוחות מרוצים</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
