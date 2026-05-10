export const CONTACT = {
  whatsappNumber: "5581987530744",
  email: "cristinevieira89@gmail.com",
  linkedin: "https://www.linkedin.com/in/cristine-vieira-6b5042400/",
  github: "https://github.com/rvcris87",
};

const DEFAULT_MSG =
  "Olá, Cristine! Vi seu portfólio e tenho interesse em criar um site para meu negócio.";

export const waLink = (message: string = DEFAULT_MSG) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = `mailto:${CONTACT.email}`;
