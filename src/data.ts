export const CONFIG = {
  email: "contact@vitor-goncalves.fr",
  phone: "+33 X XX XX XX XX",
  get tel(): string {
    return this.phone.replace(/\s/g, "");
  },
  services: [
    {
      num: ".01",
      title: "Maçonnerie générale",
      desc: "Gros œuvre, murs, cuisine, ou encore salle de bain et bien plus encore.",
    },
    {
      num: ".02",
      title: "Peinture & finitions",
      desc: "Intérieur, extérieur, enduits décoratifs et reprises soignées.",
    },
    {
      num: ".03",
      title: "Menuiserie",
      desc: "Sur-mesure bois, meubles, parquets et agencements.",
    },
  ],
  stats: [
    { k: "Interlocuteur", v: "Unique" },
    { k: "Devis", v: "Gratuit" },
    { k: "Zone", v: "Île-de-France" },
  ],
};
