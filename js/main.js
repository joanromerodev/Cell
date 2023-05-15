document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to section below when the arrow is clicked
  document.querySelector(".arrow-link").addEventListener("click", function (e) {
    e.preventDefault();
    const sectionBelow = document.querySelector("#section-below");
    sectionBelow.scrollIntoView({ behavior: "smooth" });
  });
  const interactiveImages = document.querySelectorAll(".selectable");

  interactiveImages.forEach((image) => {
    image.addEventListener("click", () => {
      const id = image.id;
      let message;
      let title;
      let img;
      switch (id) {
        case "ribosome":
          message =
            "Los ribosomas son orgánulos citoplasmáticos no delimitados por una membrana, formados por el ácido ribonucleico ribosómico (ARNr) y proteínas ribosómicas, que constituyen una máquina molecular presente en todas las células (excepto en los espermatozoides). Son los centros celulares de traducción que hacen posible la expresión de los genes. Es decir, son los encargados de la síntesis de proteínas a partir de la información contenida en el ADN, que llega transcrita a los ribosomas en forma específicamente de ARN mensajero (ARNm).";
          title = "Ribosomas";
          img = "img/img_desc/ribosomas.jpg";
          break;
        case "centrioles":
          message =
            "En biología molecular, un centriolo o centríolo es un orgánulo con estructura cilíndrica, constituido por tripletes de microtúbulos, que forma parte del citoesqueleto. Una pareja de centríolos posicionados perpendicularmente entre sí y localizada en el interior de una célula se denomina diplosoma. Cuando el diplosoma se halla rodeado de material pericentriolar (una masa proteica densa), recibe el nombre de centrosoma o centro organizador de microtúbulos (COMT), el cual es característico de las células animales. Provoca el movimiento de cilios y flagelos en los organismos unicelulares (protozoarios).";
          title = "Centriolos";
          img = "img/img_desc/centriolos.jpg";
          break;
        case "endoplasmic_rough":
          message =
            "El Retículo Endoplasmático Rugoso (RER), también llamado retículo endoplasmático granular o ergastoplasma, es un orgánulo de la célula que se encarga del transporte y síntesis de las proteínas ya sean de secreción o de membrana. Existen retículos solo en las células eucariotas. En las células nerviosas es también conocido como cuerpos de Nissl. El término rugoso se refiere a la apariencia de este orgánulo en las microfotografías electrónicas, la cual es resultado de la presencia de múltiples ribosomas en su superficie. El retículo endoplasmático rugoso está ubicado junto a la envoltura nuclear y se une a la misma de manera que puedan introducirse los ácidos ribonucleicos mensajeros (ARNm) que contienen la información para la síntesis de proteínas. Está constituido por una serie de membranas que en su pared exterior presentan ribosomas adheridos.";
          title = "Retículo Endomplásmico Rugoso";
          img = "img/img_desc/endoplasmico_rugoso.jpg";
          break;
        case "vacuole":
          message =
            "Una vacuola es un orgánulo celular presente en todas las células eucariotas vegetales. También aparece en algunas células procariotas y eucariotas animales. Las vacuolas son compartimentos cerrados o rodeados por la membrana plasmática ya que contienen diferentes fluidos, como agua o enzimas, aunque en algunos casos puede contener sólidos, por ejemplo azúcares, sales, proteínas y otros nutrientes. Su función es la de almacenar agua, sales minerales y sustancias de reserva o de sobra, además, contribuyen al mantenimiento de la forma celular. La mayoría de las vacuolas se forman por la fusión de múltiples vesículas membranosas. El orgánulo no posee una forma definida, su estructura varía según las necesidades de la célula en particular.";
          title = "Vacuola";
          img = "img/img_desc/vacuola.jpg";
          break;
        case "golgi":
          message =
            "El complejo de Golgi o aparato de Golgi ​es un orgánulo presente en todas las células eucariotas que forma parte del sistema de endomembranas. El Golgi está formado principalmente por 4-6 sáculos aplanados o cisternas (dictiosomas) que se encuentran apilados unos encima de otros, y cuya función es completar el procesamiento y eventual secreción de algunas macromoléculas. Funciona como una planta empaquetadora, modificando vesículas del retículo endoplasmático rugoso, el material nuevo de las membranas se forma en varias cisternas del aparato de Golgi. Dentro de las funciones que posee el aparato de Golgi se encuentran la glucosilación de proteínas, selección, destinación y glucosilación de lípidos, y la síntesis de polisacáridos de la matriz extracelular. Almacenamiento y distribución de lisosomas, al igual que los peroxisomas, que son vesículas de secreción de sustancias.​";
          title = "Aparato de Golgi";
          img = "img/img_desc/golgi.jpg";
          break;
        case "lysosome":
          message =
            "Los lisosomas son orgánulos celulares unidos a la membrana que contienen enzimas digestivas. Los lisosomas están implicados en varios procesos celulares. Son los encargados de reciclar restos celulares de desecho. Pueden destruir virus y bacterias invasoras. Si la célula es dañada y no puede ser reparada, los lisosomas participan en el proceso de autodestrucción conocido como muerte celular programada o apoptosis.";
          title = "Lisosomas";
          img = "img/img_desc/lisosomas.jpg";
          break;
        case "microtubules":
          message =
            "Los microtúbulos son estructuras celulares formadas por polímeros proteicos, de 25 nm de diámetro exterior y unos 12 nm de diámetro interior, con longitudes que varían entre unos pocos nanómetros a micrómetros, ​que se originan en el Centro organizador de microtúbulos (MTOC en inglés) y que se extienden a lo largo de todo el citoplasma. Se hallan con diferentes características en las células eucariotas y en las procariotas. Están formados por la polimerización de un dímero de dos proteínas globulares, la tubulina alfa y la tubulina beta. Los microtúbulos intervienen en diversos procesos celulares que involucran desplazamiento de vesículas de secreción, movimiento de orgánulos, transporte intracelular de sustancias, así como en la división celular (mitosis y meiosis) y que, junto con los microfilamentos y los filamentos intermedios, forman el citoesqueleto. Además, constituyen la estructura interna de los cilios y los flagelos.";
          title = "Microtúbulos";
          img = "img/img_desc/microtubulos.jpg";
          break;
        case "mithocondry":
          message =
            "Las mitocondrias son orgánulos celulares eucariotas encargados de suministrar la mayor parte de la energía necesaria para la actividad celular a través del proceso denominado respiración celular. Actúan como centrales energéticas de la célula y sintetizan ATP a expensas de los carburantes metabólicos (glucosa, ácidos grasos y aminoácidos). La mitocondria presenta una membrana exterior permeable a iones, metabolitos y muchos polipéptidos.​ Eso se debe a que contiene proteínas que forman poros llamados porinas o VDAC (canal aniónico dependiente de voltaje), que permiten el paso de moléculas de hasta 5 kDa de masa y un diámetro aproximado de 2 nm.";
          title = "Mitocondrias";
          img = "img/img_desc/mitocondrias.png";
          break;
        case "endoplasmic_smooth":
          message =
            "El retículo endoplasmático liso (REL) es un orgánulo celular que consiste en un entramado de túbulos de membrana interconectados entre sí y que se continúan con las cisternas del retículo endoplasmático. A diferencia del retículo endoplasmático rugoso, no tiene ribosomas asociados a sus membranas (de ahí el nombre de liso) y, en consecuencia, la mayoría de las proteínas que contiene son sintetizadas en el retículo endoplasmático rugoso.​ Es abundante en aquellas células implicadas en el metabolismo de lípidos, la desintoxicación y el almacenamiento de calcio. Participa en el transporte celular, en la síntesis de lípidos —triglicéridos, fosfolípidos para la membrana plasmática, esteroides, en la depuración —gracias a enzimas que metabolizan el alcohol y otras sustancias químicas— en la glucogenólisis —proceso imprescindible para mantener los niveles de glucosa adecuados en sangre—, y actúa como reservorio de calcio.";
          title = "Retículo Endomplásmico Liso";
          img = "img/img_desc/endoplasmico_liso.png";
          break;
        case "microvilli":
          message =
            "Las microvilli (en singular microvillus), también conocidas como microvellosidades (del griego μικρο mikro ‘pequeño’ y del latín villus ‘vellosidad’), son prolongaciones digitiformes (en forma de dedo) rodeadas por plasmalema, presentes en la superficie luminal de algunas células, que permiten ampliar la superficie libre (apical de las células epiteliales), para aumentar el intercambio de sustancias. Los microvilli o microvellosidades suelen encontrarse en células animales del epitelio en el intestino o los riñones.";
          title = "Microvellosidades";
          img = "img/img_desc/microvelli.jpg";
          break;
        case "nucleolus":
          message =
            "En biología celular, el nucléolo o nucleolo es una región del núcleo que se considera una estructura supra-macromolecular, que no posee membrana que lo limite. La función principal del nucléolo es la transcripción del ARN ribosomal por la polimerasa I, y el posterior procesamiento y ensamblaje de los pre-componentes que formarán los ribosomas. La biogénesis del ribosoma es un proceso nucleolar muy dinámico, que involucra: la síntesis y maduración de ARNr, sus interacciones transitorias con proteínas no-ribosomales y RNP y también el ensamblaje con proteínas ribosomales. Además, el nucléolo tiene roles en otras funciones celulares tales como la regulación del ciclo celular, las respuestas de estrés celular, la actividad de la telomerasa y el envejecimiento.";
          title = "Nucléolo";
          img = "img/img_desc/nucleolo.jpg";
          break;
        case "nucleus":
          message =
            "En biología, el núcleo celular es una estructura membranosa que se encuentra normalmente en el centro de las células eucariotas. Contiene la mayor parte del material genético celular, organizado en varias moléculas extraordinariamente largas y lineales de ADN, con una gran variedad de proteínas, como las histonas, lo cual conforma lo que llamamos cromosomas. El conjunto de genes de esos cromosomas se denomina genoma nuclear. La función del núcleo es mantener la integridad de esos genes y controlar las actividades celulares regulando la expresión génica. Por ello se dice que el núcleo es el centro de control de la célula.La principal estructura que constituye el núcleo es la envoltura nuclear, una doble membrana que rodea completamente al orgánulo y separa ese contenido del citoplasma, además de contar con poros nucleares que permiten el paso a través de las membranas para la correcta regulación de la expresión genética y el mantenimiento cromosómico.";
          title = "Núcleo";
          img = "img/img_desc/nucleo.jpg";
          break;
        case "membrane":
          message =
            "La membrana plasmática, membrana celular, membrana citoplasmática o plasmalema es una capa o bicapa lipídica y otras sustancias que delimita toda la célula, dividiendo el medio extracelular del intracelular (citoplasma).Las membranas celulares que componen la célula, incluidas las membranas plasmáticas y las membranas internas eucariotas (como la membrana nuclear), están hechas de glicerofosfolípidos, moléculas compuestas de glicerol, un grupo fosfato y dos cadenas lipídicas (como los ácidos grasos). El glicerol es una molécula de tres carbonos que funciona como el eje central de esta membrana. Se forma una geometría que permite que los glicerofosfolípidos se alineen uno al lado del otro para formar láminas anchas; los glicerofosfolípidos son, con mucho, los lípidos más abundantes en las membranas celulares, y como todos los lípidos, son insolubles en agua, pero su geometría única hace que se agreguen en capas sin ningún aporte de energía. ";
          title = "Membrana Plasmática";
          img = "img/img_desc/membrana.png";
          break;
        case "cytoplasm":
          message =
            "El citoplasma es la parte del protoplasma en una célula eucariota y procariota que se encuentra entre el núcleo celular y la membrana plasmática.​ Consiste en una dispersión coloidal muy fina de aspecto granuloso, el citosol o hialoplasma, y en una diversidad de orgánulos celulares que desempeñan diferentes funciones. Su función es albergar los orgánulos celulares y contribuir al movimiento de estos. El citosol es la sede de muchos de los procesos metabólicos que se dan en las células.";
          title = "Citoplasma";
          img = "img/img_desc/citoplasma.jpg";
          break;
        case "cell_def":
          message =
            "Desde siempre se ha tenido muy claro la definición de célula desde la biología, concepto ya declarado, puede pensarse que nos falta es apoderamiento de dicho concepto al momento de hacer uso de él en el contexto del diario vivir, para mejor cada día mas y valorar la vida desde la biología. La célula es la unidad estructural y funcional de todos los organismos vivos. Constituye la forma más pequeña y simple de organización biológica, es decir, la estructura ordenada y viviente más pequeña que se conoce. Son ejemplos de células los espermatozoides y las neuronas. La célula es la entidad más pequeña que se considera viva. El tamaño de las células puede variar mucho. Una célula de tamaño promedio mide alrededor de 10 µm (micrómetros). La gran mayoría de las células son microscópicas, es decir, solo pueden ser vistas utilizando un microscopio. Por otro lado, existen células que pueden ser observadas a simple vista, este es el caso del óvulo humano, que mide 100 µm y tiene un tamaño similar al de la punta de un lápiz. El descubrimiento de la célula se considera el paso fundacional del estudio moderno de la vida (biología), dado que permitió comprender la enorme complejidad del cuerpo de los seres vivos y permitió el surgimiento de numerosas ciencias y disciplinas posteriores.";
          title = "¿Qué es una célula?";
          img = "img/img_desc/celula.jpg";
          break;
        case "cell_types":
          message =
            "Célula procariota: esta presenta dos estructuras principales la membrana plasmática y el citoplasma son pequeñas y simples. Células eucariotas: esta célula se define como dominio eukarya, en donde se clasifican a los animales, los hongos, las plantas, y los protozoarios. Célula vegetal: tipo de célula eucariota se caracteriza por tener la capacidad de obtener energía a partir de la luz solar. Célula animal: posee una membrana plasmática que delimita el citoplasma donde se encuentran el núcleo y los otros organeros. Células epiteliales: estas se encuentran recubriendo el exterior del organismo (en la piel) y las superficies internas. adipocitos: son células de almacenamiento de los lípidos y se encuentran en el tejido conectivo y el tejido adiposo. Son muy grandes y redondas. Fibroblastos: es la responsable de la formación y mantenimiento del tejido conectivo. Monocitos y Macrófagos: estas son las encargadas del sistema inmune en la medula ósea y se liberan en la sangre luego de un tiempo los monocitos salen de los vasos sanguíneos. Células musculares: se caracterizan principalmente por su capacidad de contraerse. Son alargadas en la dirección del movimiento que realizan. Glóbulos rojos: trasportan el oxígeno a todas las partes del cuerpo. Células Oseas: aparecen en la etapa del crecimiento del hueso";
          title = "Tipo de células";
          img = "img/img_desc/celula_tipos.jpg";
          break;
        case "cell_function":
          message =
            "Según el tipo de célula así mismo es su función, podríamos decir que sus tres funciones básicas son las de nutrirse dentro de su proceso metabólico, relacionarse a través de estímulos tanto internos como externos lo cual genera una o varias respuestas y reproducirse por medio de la mitosis y la meiosis. Pero también hay otras funciones como la estructural en la formación de tejidos, funciones secretoras, funciones defensivas etc. ";
          title = "Función de las células";
          img = "img/img_desc/celula_funcion.jpg";
          break;
        case "cell_organs":
          message =
            "Son estructuras subcelulares que se encuentran dentro del citoplasma de la célula y que cumplen funciones especificas como los distintos órganos en el cuerpo, como dice Gartner, L.P (2007) “ los orgánulos son unidades metabólicamente activas de la materia celular”.  Dentro de los principales encontramos a las mitocondrias, retículo endoplasmático, el complejo de Golgi, los lisosomas, el Núcleo, etc. Según Fortoul van (2013) Los organelos celulares se pueden clasificar, con fines didácticos, en: a) membranosos (con membranas que separan el medio interno del organelo del citoplasma circundante) y b) no membranosos (que no están rodeados por membrana). Los membranosos incluyen a la membrana plasmática, los retículos endoplásmicos rugoso y liso, el aparato de Golgi, las endosomas, los lisosomas, las vesículas de transporte, las mitocondrias y los peroxisomas. Los no membranosos son el nucleolo, el citoesqueleto, los centriolos, los ribosomas, los polirribosomas y las proteasomas.";
          title = "Organelos de las células";
          img = "img/img_desc/organelos.jpg";
          break;
        case "bibliography":
          message =
            "https://concepto.de/celula-2/#ixzz81R6F6YSN. https://www.diferenciador.com/tipos-de-celulas/. https://elibro.net/es/ereader/biblioibero/124810?page=48. https://accessmedicina.mhmedical.com/content.aspx?bookid=1502&sectionid=94732336. https://accessmedicina.mhmedical.com/content.aspx?bookid=1502&sectionid=94733584";
          title = "Bibliografía y fuentes";
          img = "img/img_desc/bibliografia.png";
          break;
        default:
          message = "Lo sentimos, no logramos encontrar el organelo solicitado";
          title = "Error";
          img = "https://cdn-icons-png.flaticon.com/512/1548/1548733.png";
      }

      // Set the modal message and open the modal
      const modalMessage = document.getElementById("modal-message");
      const modalTitle = document.querySelector(".modal-title");
      const imageDesc = document.querySelector("#img_desc");

      imageDesc.classList.add(
        "mb-4",
        "img-fluid",
        "img-thumbnail",
        "mx-auto",
        "mx-auto",
        "d-block"
      );
      imageDesc.style.width = "70%";
      modalMessage.classList.add("px-4");
      modalMessage.textContent = message;
      modalTitle.textContent = title;
      imageDesc.setAttribute("src", img);
      const modal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    });
  });
});
