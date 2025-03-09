import "./Kirish.css";

const Kirish = () => {
  return (
    <div className="container">
      <div className="kirish">
        <h1>Tizimga kirish yoki profil yaratish</h1>

        <div className="kirish-input">
          <label htmlFor="telnumber">Telefon raqami</label>
          <input
            type="tel"
            id="telnumber"
            placeholder="+998 (_ _) _ _ _  _ _ _ _"
          />
        </div>

        <button>Tasdiqlash</button>
      </div>
    </div>
  );
};

export default Kirish;
