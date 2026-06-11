export interface InfoCard {
  label: string;
  value: string;
}

export interface SobreMiT {
  title: string;
  role: string;
  greeting: string;
  subtitle: string;
  bio1: string;
  bio2: string;
  downloadCV: string;
  viewProjects: string;
  available: string;
  infoCards: {
    rol: InfoCard;
    stack: InfoCard;
    location: InfoCard;
    focus: InfoCard;
  };
}

export interface ProyectoItem {
  num: string;
  title: string;
  year: string;
  kind: string;
  description: string;
  tags: readonly string[];
  image: string;
  /** URL del repositorio; null si el proyecto está bajo NDA */
  url: string | null;
}

export interface ProyectosT {
  title: string;
  countLabel: string;
  githubLabel: string;
  ndaLabel: string;
  items: readonly ProyectoItem[];
}

export interface EducacionItem {
  school: string;
  city: string;
  period: string;
  degree: string;
  current?: boolean;
  description: string;
}

export interface EducacionT {
  title: string;
  currentLabel: string;
  items: readonly EducacionItem[];
}

export interface CertItem {
  name: string;
  provider: string;
}

export interface CertificacionesT {
  title: string;
  statusLabel: string;
  items: readonly CertItem[];
}

export interface SkillGroup {
  group: string;
  items: readonly string[];
}

export interface HabilidadesT {
  title: string;
  groups: readonly SkillGroup[];
}

export interface ContactoT {
  title: string;
  titleAccent: string;
  subtitle: string;
  writeMe: string;
  copyEmail: string;
  copyPhone: string;
  copied: string;
  email: string;
  phone: string;
}

export interface Translations {
  status: string;
  location: string;
  footer: string;
  sobreMi: SobreMiT;
  proyectos: ProyectosT;
  educacion: EducacionT;
  certificaciones: CertificacionesT;
  habilidades: HabilidadesT;
  contacto: ContactoT;
}
