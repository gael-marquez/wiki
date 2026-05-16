// Repositorio de Recursos sobre Endometriosis
// Datos organizados por categoría. Para añadir un nuevo recurso, copia un objeto
// del arreglo y modifica los campos: title, category y url.

const resources = [
  // 1. DIAGNÓSTICO Y MAPEO
  { title: "Definiciones: retiro solo de útero no cura Endo", category: "Diagnóstico y Mapeo", url: "https://vt.tiktok.com/ZS9n4EFCN/" },
  { title: "Tu estudio dice que todo bien", category: "Diagnóstico y Mapeo", url: "https://vt.tiktok.com/ZSxdC7FCV/" },
  { title: "Medio especialista", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DYVgs_1x8aq/?igsh=ZmU3b3dnYTY3a25h" },
  { title: "Mapeos", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DXs_-p1DbBb/?igsh=N2M1bXZxbjloczA2" },
  { title: "Mapeos 2", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DW624MtEcYl/?igsh=MXhrMjJnZzk0Y2ppNg==" },
  { title: "Mapeos 3", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DWkUWIkDcj6/?igsh=cm5nbjZsZnN3bjBo" },
  { title: "Mapeo Enzian", category: "Diagnóstico y Mapeo", url: "https://vt.tiktok.com/ZSxdCvLR5/" },
  { title: "Mapeo Enzian 2", category: "Diagnóstico y Mapeo", url: "https://vt.tiktok.com/ZSxdCmhUs/" },
  { title: "Mapeo sin laparoscopia explorativa", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DVUqUo2keh3/?igsh=dno2OThnMHg3NGpk" },
  { title: "No operar sin mapeo", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DRCp2LLEdI7/?igsh=Znk0a24yNWx4NWpu" },
  { title: "Mapeo cada 6 meses", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/reel/DUe7QWyjVe0/?igsh=MTc2d3NlN3d2dnd0" },
  { title: "Diferencia entre ultrasonido normal", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/p/DU_KRA6kaNX/?img_index=6&igsh=bjlxYm05bXJlZXhk" },
  { title: "Origen embriológico", category: "Diagnóstico y Mapeo", url: "https://www.instagram.com/p/DTf2RV9kbyR/?img_index=2&igsh=MTE4MGZ3c3BjdjUw" },

  // 2. ADENOMIOSIS / ENDOMETRIOSIS / MIOMAS
  { title: "Triple enfermedad", category: "Adenomiosis / Endometriosis / Miomas", url: "https://vt.tiktok.com/ZS9nVC7CJ/" },
  { title: "Triple enfermedad (Instagram)", category: "Adenomiosis / Endometriosis / Miomas", url: "https://www.instagram.com/reel/DXPUf6ukYdJ/?igsh=MzdodXc2b2UzN2ww" },
  { title: "La adenomiosis nunca viene sola", category: "Adenomiosis / Endometriosis / Miomas", url: "https://vt.tiktok.com/ZS9nVWp6h/" },
  { title: "80-90% probabilidad de Endo si tienes miomas o adenomiosis", category: "Adenomiosis / Endometriosis / Miomas", url: "https://vt.tiktok.com/ZS9nV6A8g/" },
  { title: "Solo un quiste endometrioma", category: "Adenomiosis / Endometriosis / Miomas", url: "https://www.instagram.com/reel/DXy_SmVRy9f/?igsh=MWlpOGpzeXFibzNiMA==" },
  { title: "Endometrioma", category: "Adenomiosis / Endometriosis / Miomas", url: "https://www.instagram.com/reel/DXy_SmVRy9f/?igsh=MWlpOGpzeXFibzNiMA==" },
  { title: "Miomas laparoscopia", category: "Adenomiosis / Endometriosis / Miomas", url: "https://www.instagram.com/reel/DWjQWRYEQmG/?igsh=NW1oOGtweGw1Nmdp" },

  // 3. CIRUGÍA Y RECUPERACIÓN
  { title: "Ablación y escisión", category: "Cirugía y Recuperación", url: "https://vt.tiktok.com/ZS9TgSapm/" },
  { title: "Cirugía robótica", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DXh1f7KkfDM/?igsh=MjlqY3dzNjJ6YW9v" },
  { title: "Cirugía robótica 2", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DXcbM2wkfiR/?igsh=azlodjhianczbXBq" },
  { title: "Es mejor operar en cuanto sea posible", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DWaPjqwES7n/?igsh=MXdyeXBlNzhybmxiZg==" },
  { title: "Recurrencia", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DWOv-5YES61/?igsh=c2JnZWp5YTJiNGJ2" },
  { title: "Recurrencia 2", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DU1k5-UEeDS/?igsh=MTJjcHhrZXJuYm5mbA==" },
  { title: "Recurrencia (TikTok 1)", category: "Cirugía y Recuperación", url: "https://vt.tiktok.com/ZS9Ks6edg/" },
  { title: "Recurrencia (TikTok 2)", category: "Cirugía y Recuperación", url: "https://vt.tiktok.com/ZS9Kp3Qb1/" },
  { title: "Rehabilitación después de cirugía Endo", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DYNPN7tu5mo/?igsh=NjhzNjh0bzg1MXNv" },
  { title: "Medicina funcional después de cirugía", category: "Cirugía y Recuperación", url: "https://www.instagram.com/reel/DUWpY4_DcoE/?igsh=b3Y2ZGphd28wbHlo" },

  // 4. SUELO PÉLVICO Y PROLAPSOS
  { title: "Prolapsos", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DUORefPDgiY/?igsh=MXNwaTZqb3BjZGZ2bg==" },
  { title: "Prolapso", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DShh3Z_jifL/?igsh=MXB0dWU5bnYyMnh1ZA==" },
  { title: "Kegel y prolapso", category: "Suelo Pélvico y Prolapsos", url: "https://www.facebook.com/share/v/14aNWmGEgVN/?mibextid=wwXIfr" },
  { title: "Histerectomía: ejercicio y respiración", category: "Suelo Pélvico y Prolapsos", url: "https://vt.tiktok.com/ZS9vRDUmV/" },
  { title: "Histerectomía: ejercicio y respiración 2", category: "Suelo Pélvico y Prolapsos", url: "https://vt.tiktok.com/ZS9vR2K1L/" },
  { title: "Histerectomía: ejercicio y respiración 3", category: "Suelo Pélvico y Prolapsos", url: "https://vt.tiktok.com/ZS9vRvbHJ/" },
  { title: "Ejercicio y respiración (Instagram)", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DWhFvw4CPMG/?igsh=anNoZjVmNGg5aWRk" },
  { title: "Ejercicio y respiración (Instagram 2)", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DU-fBw_iBms/?igsh=MXZqeDN1a3p2dmR2eQ==" },
  { title: "¿Kegel siempre?", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DVOKqCniG8Q/?igsh=MXQ2MWJvOWQ1czB3cQ==" },
  { title: "Abdominales", category: "Suelo Pélvico y Prolapsos", url: "https://www.instagram.com/reel/DQzqnOWAcGe/?igsh=MXJ4NWdidjFicWkwYg==" },
  { title: "Masaje perineal", category: "Suelo Pélvico y Prolapsos", url: "https://www.facebook.com/share/r/1VrLtZ281S/?mibextid=wwXIfr" },
  { title: "¿Estás lista para correr?", category: "Suelo Pélvico y Prolapsos", url: "https://www.facebook.com/share/r/1JzxquReF7/?mibextid=wwXIfr" },
  { title: "Valoración suelo pélvico", category: "Suelo Pélvico y Prolapsos", url: "https://www.facebook.com/share/v/1BGLnji1qV/?mibextid=wwXIfr" },

  // 5. SÍNTOMAS NEUROLÓGICOS Y SISTÉMICOS
  { title: "Endometriosis y cerebro", category: "Síntomas Neurológicos y Sistémicos", url: "https://www.instagram.com/reel/DYFnJ-JvnsT/?igsh=OHA1c2RyZ3BwM2Vj" },
  { title: "Endo y neuropatías", category: "Síntomas Neurológicos y Sistémicos", url: "https://www.instagram.com/reel/DYASTvUxLiA/?igsh=MXI5amk5b3dhMnQ1cw==" },
  { title: "Endo y sueño", category: "Síntomas Neurológicos y Sistémicos", url: "https://www.instagram.com/reel/DXPUmJdBwwS/?igsh=YXgycXhuN2xlNm5v" },
  { title: "Neblina mental", category: "Síntomas Neurológicos y Sistémicos", url: "https://www.instagram.com/reel/DWWv-UNkcNo/?igsh=MWgxaDhjbHdsenZmag==" },
  { title: "Compresión nerviosa", category: "Síntomas Neurológicos y Sistémicos", url: "https://vt.tiktok.com/ZSxdpBwoX/" },
  { title: "Neuropelveología", category: "Síntomas Neurológicos y Sistémicos", url: "https://vt.tiktok.com/ZSxdpFgNa/" },
  { title: "Problema al orinar", category: "Síntomas Neurológicos y Sistémicos", url: "https://vt.tiktok.com/ZS9KGNxrL/" },

  // 6. HORMONAS / ENDOCRINO / MENOPAUSIA
  { title: "Prolactina y cortisol", category: "Hormonas / Endocrino / Menopausia", url: "https://www.instagram.com/reel/DNYpFYcuozD/?igsh=emdmbjhxcXU1ejF4" },
  { title: "Menopausia no siempre es con hormonas", category: "Hormonas / Endocrino / Menopausia", url: "" },
  { title: "Perimenopausia", category: "Hormonas / Endocrino / Menopausia", url: "https://www.instagram.com/reel/DC8BnLcxFti/?igsh=ZWR3dWFkeXJ4YnA0" },
  { title: "Bajar estrógenos: tratamiento", category: "Hormonas / Endocrino / Menopausia", url: "https://vt.tiktok.com/ZSx1yaHBQ/" },
  { title: "Vitamina D y toxicidad", category: "Hormonas / Endocrino / Menopausia", url: "https://www.instagram.com/reel/DPJ2R1XjlUg/?igsh=MXh6M3FkZW13Z3h1MA=" },
  { title: "Caída de cabello", category: "Hormonas / Endocrino / Menopausia", url: "https://www.instagram.com/reel/Cxd5eLhO0tM/?igsh=MXg1Ynlnand0MXFncA==" },

  // 7. NUTRICIÓN / MICROBIOTA / INFLAMACIÓN
  { title: "Personalizar dieta", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DPFXyVAkTFd/?igsh=MXZ2Z3g1djQ2ZjVheQ==" },
  { title: "No funciona dieta antiinflamatoria", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DNUQ8gyuvbc/?igsh=ZGxhdmQzZzdwMHRi" },
  { title: "Cómo identificar lo que inflama", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DUvnhGXjfH2/?igsh=MWtrM3FtOXg1ZnZpdQ==" },
  { title: "Hidratación", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DKsOd6QOUbJ/?igsh=MXB0dmp2dTZpb3lrbg==" },
  { title: "Kefir y Endo", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DQFgPBqESD8/?igsh=NHQxYjhreXhobm9w" },
  { title: "Microbiota y menopausia", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DNdZLUmPfpY/?igsh=d294YzR3YjhvcmJ5" },
  { title: "Intolerancia a la fructosa", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DVT7C6RAWKb/?igsh=ZDNjbm55bXV3b2pz" },
  { title: "Histamina y Endo", category: "Nutrición / Microbiota / Inflamación", url: "https://vt.tiktok.com/ZS9EfkMEN/" },
  { title: "Creatina", category: "Nutrición / Microbiota / Inflamación", url: "https://www.instagram.com/reel/DOO4wCZEfZc/?igsh=d2N1Nzc1eWJsY3Bu" }
];
