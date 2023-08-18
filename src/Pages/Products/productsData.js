import img01 from "./productImages/img001.png";
import img02 from "./productImages/img002.png";
import img03 from "./productImages/img003.png";
import img04 from "./productImages/img004.jpg";
import img05 from "./productImages/img005.jpg";
import img08 from "./productImages/img008.jpg";
import img09 from "./productImages/img009.png";
import img10 from "./productImages/img010.png";
import img11 from "./productImages/img011.png";
import img12 from "./productImages/img012.png";
import img13 from "./productImages/img013.png";
import img14 from "./productImages/img014.png";
import img15 from "./productImages/img015.png";
import img16 from "./productImages/img016.png";
import img17 from "./productImages/img017.png";
import img18 from "./productImages/img018.png";
import img19 from "./productImages/img019.png";
import img20 from "./productImages/img020.png";
import subImg005 from "./productImages/subImg005.png";
import subImg009 from "./productImages/subImg009.png";


const products = [
  {
    productId: "001",
    name: "AADXC-200 / AADXC-400  ",
    category: "Controllers",
    img: img01,
    introduction:
      "Advance Analytics AADXC Series Single/Dual- channel transmitter, measured parameters include PH, DO, ORP, conductivity, turbidity, SS, chlorophyll, blue-green algae and other parameters. And realize the plug and play of the sensor, the configuration is flexible and convenient.",
    features: [
      "Power supply and output isolation design to ensure electrical safety",
      "Power supply and communication chip built-in protection circuit, strong anti-interference ability",
      "Comprehensive protection circuit design for reliable operation without additional equipment",
      "Circuit part designed inside the electrode for better environmental tolerance and easier installation",
      "RS-485 transmission interface and MODBUS-RTU communication protocol for two-way communication and remote command reception",
      "Output of electrode diagnostic information for enhanced intelligence",
      "Internal integrated memory for storing calibration and setting information",
      "Memory retention of calibration and setting information even after power off",
    ],
    attributes: [
      { name: "Model", value: "AADXC-200 / AADXC-400" },
      
      { name: "Part Number", value: "AADXC-200 (SINGLE) AADXC-400  (DUAL)" },
      {
        name: "Display",
        value:
          "128*64 Graphic dot matrix LCD with LED strong backlight, can operate in direct sunlight",
      },
      {
        name: "Power supply",
        value:
          "AC power supply: 85-500 VAC (50/60 HZ)\nDC power supply: 9~36 VDC",
      },
      {
        name: "Main material",
        value: "PA66+GF25+FR (Cover)\nAluminium alloy powder Lower casing",
      },
      {
        name: "Output",
        value:
          "3-way 4-20 mA analog output, programmed response parameter and response range",
      },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value",
      },
      {
        name: "Communication protocol",
        value:
          "Equipped with MODBUS RS485 communication function, real-time transmission of measured values",
      },
      { name: "Storage temperature", value: "20~70 ℃" },
      { name: "Measuring temperature", value: "-15~60 ℃" },
      {
        name: "Power supply",
        value: "AC: 85-500 VAC (50/60 HZ)\nDC: 9~36 VDC",
      },
      { name: "Protection class", value: "IP68/NEMA 6P" },
      { name: "Dimensions", value: "145*125*162 mm (L*W*H)" },
      { name: "Weight", value: "1.35KG" },
    ],
  },
  {
    productId: "002",
    name: "AAP-C1000-700",
    category: "Controllers",
    img: img02,
    introduction:
      "AAP-C1000-700 Multi-parameter transmitter cansimultaneously monitor multiple different parameters according to customers’ different needs, including Temperature / PH / ORP  / Conductivity/ Dissolved oxygen/Turbidity /Sludge   concentration/Chlorophyll/ Blue-green algae / COD / NO3 /  Ionic ammonia nitrogen / Transparency / Residual chlorine and other parameters. It is widely used in water quality monitoring in wastewater treatment plants, waterworks, water stations, surface water, and industrial fields  The transmitter software interface parameter display i adaptive, the operation interface menu is simple to set up, the   user operation is convenient; the sensor is plug and play; the  electrode installation and replacement is fast and convenient;  various data transmission modes are optional, and the data  storage and export are available.",
    features: [
      "Up to 7 sensors can be connected to improve integration and reduce operating and maintenance costs",
      "High versatility with common digital sensor interfaces and configuration options for analog sensors",
      "Quick and convenient electrode installation and replacement with sensor plugs and operations",
      "Multiple data transmission methods including 4~20mA, MODBUS RS485, and wireless transmission",
      "7-inch color touch screen for easy operation, learning, and reliable system with low maintenance",
      "Data storage and curve display function to monitor parameter dynamics",
      "Automatic reminders for error and alarm information with alarm signal uploading",
      "Three levels of management authority",
      "Wall mounting or panel mounting options",
      "Optional wireless data transmission module",
    ],
    attributes: [
      { name: "Model", value: "AAP-C1000-700" },
      { name: "Part Number", value: "AAP.C1000.700" },
      { name: "Power supply", value: "AC: 85~500VAC; DC: 9~36VDC" },
      {
        name: "Main material",
        value:
          "PA66+GF25+FR (top cover); Aluminum powder dusting (lower shell)",
      },
      { name: "Protective Rate", value: "IP65/ NEMA4X" },
      { name: "Dimension", value: "260mm*200mm*123.3mm (L×W×H)" },
      { name: "Weight", value: "About 2.0KG" },
      { name: "Storage Temperature", value: "-20 to 70℃" },
      { name: "Operation Temperature", value: "-15 to 60℃" },
      {
        name: "Communication Protocol",
        value: "MODBUS RS485 (standard), 4G: UDP/TCP, NB: UDP (optional)",
      },
    ],
  },
  {
    productId: "003",
    name: "PPH-500 pH Sensor",
    category: "Sensors",
    introduction:
      "The pH Sensor is widely used in pH monitoring in water treatment, hydrological monitoring, wastewater treatment, swimming pools, fish ponds and fertilizers, chemicals, and biology.It uses a composite electrode in which a glass indicating electrode and a reference electrode are combined to measure the pH of the water.",
    img: img03,
    features: [
      "Power supply and output isolation design to ensure electrical safety.",
      "Power supply and communication chip built-in protection circuit, strong anti-interference ability.",
      "With a comprehensive protection circuit design, it can work reliably without additional equipment.",
      "The circuit part is designed inside the electrode, the environment is well tolerated, and the installation operation is easier.",
      "RS-485 transmission interface, MODBUS-RTU communication protocol, two-way communication, can receive remote commands.",
      "Output more electrode diagnostic information, more intelligent.",
      "Internal integrated memory, memory calibration and setting information can be memorized.",
    ],
    attributes: [
      {
        name: "Main material",
        value: "Black Polypropylene, Ag/Agcl Reference Gel",
      },
      { name: "Measurement range", value: "0-14pH" },
      { name: "Temperature range", value: "0-80℃ (Non-freezing)" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      { name: "Zero potential pH value", value: "7±0.25pH (15mV)" },
      { name: "Slope", value: "≥95%" },
      { name: "Internal Resistance", value: "≤250MΩ" },
      { name: "Alkaline error", value: "0.2pH (1mol/L Na+ pH14) (25℃)" },
      {
        name: "Response time",
        value: "≤10 seconds (Reach 95% of the end value) (After stirring)",
      },
      { name: "Dimension", value: "Dia. 28.7mm * Length 195mm" },
      { name: "Weight", value: "Sensor: 0.2KG" },
      {
        name: "Cable length",
        value: "Standard: 10m, the maximum can be extended to 20M",
      },
    ],
  },
  {
    productId: "004",
    name: "POP-500 ORP Sensor",
    category: "Sensors",
    introduction:
      "The ORP sensor is a combination electrode combined precious metals indicator electrode with reference electrode. Firstly measure the potential difference of working battery made up of measuring electrode and reference electrode in the solution,then use linear relation of ORP value of the measuring solution and potential of working battery to realize the ORP on-line monitoring.",
    img: img04,
    features: [
      "Good repeatability and stability. Suitable for fresh water and sea water testing, Measurement range:.  -2000mV ~ +2000mV ",
      "Simple cleaning and activation,quite high balance speed.",
      " Optional analog-digital conversion module to achieve digital signal output,high anti-jamming capacity and far transmission distance.",
      " Optional analog-digital conversion module to achieve standard digital signal output（RS485）,can achieve integration and networking with other equipment without controller.",
      " Quick and easy field installation,adopting terminal connection.",
    ],
    attributes: [
      {
        name: "Main materials",
        value: "Black Polypropylene, Ag/Agcl Reference Gel",
      },
      { name: "Measurement range", value: "-2000mV ~ +2000mV" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      { name: "Temperature range", value: "0-80℃ (Non-freezing)" },
      {
        name: "Zero potential value",
        value:
          "86±15mV (25℃) (in pH 7.00 solution containing saturated quinhydrone)",
      },
      {
        name: "Range",
        value:
          "≥170mV (25℃) (in PH 4 solution containing saturated quinhydrone)",
      },
      {
        name: "Response time",
        value: "≤10 sec (Reach 95% of the end value) (After stirring)",
      },
      { name: "Dimensions", value: "Sensor: Dia28.7mm * L 195mm" },
      { name: "Weight", value: "Sensor: 0.2KG" },
      {
        name: "Cable length",
        value: "Standard: 10m, the maximum can be extended to 20M",
      },
    ],
  },
  {
    productId: "005",
    name: "PEC-500 Conductivity Sensor",
    category: "Sensors",
    img: img05,
    introduction:
      "The conductivity sensor is a glass platinum electrode. In general, the voltage is in the form of a sine wave. Conductivity is determined by the ohmic formula based on voltage and current values. It is widely used in the monitoring of conductivity in water treatment, hydrological monitoring, wastewater treatment, swimming pools, fish ponds and fertilizers, chemicals, and biology.",
    attributes: [
      {
        name: "Main materials",
        value: "Black polypropylene shell, glass platinum electrode",
      },
      { name: "Measurement range", value: "Conductivity: 10-5000 us/cm" },
      { name: "Temperature range", value: "0-80℃" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      {
        name: "Response time",
        value: "≤10 sec (Reach 95% of the end value) (After stirring)",
      },
      { name: "Medium temperature", value: "0~80℃ (Non-freezing)" },
      { name: "Dimensions", value: "Sensor: Dia28.7mm * L 195mm" },
      { name: "Weight", value: "Sensor: 0.2KG" },
      {
        name: "Cable length",
        value: "Standard: 10m, the maximum can be extended to 20M",
      },
    ],
  },
  {
    productId: "006",
    name: "PPH-500A Digital pH sensor",
    category: "Sensors",
    introduction:
      "Introducing our pH Sensor, a durable and precise solution for measuring pH levels. Made with high-quality materials such as PPS shell and a glass core electrode, it ensures accurate readings within a wide range of 0-14 pH. With a resolution of 0.01 pH and an accuracy of ±0.1 pH, it delivers reliable results. The sensor also includes temperature sensing capabilities with a range of -10 to 110°C and a resolution of 0.1°C. Its compact design, 12V DC power supply, and IP68 water protection make it suitable for various applications. The standard cable length is 10m, extendable up to 200m. Trust our pH Sensor for precise pH measurements in diverse environments.",
    application:
      "It is widely used in pH monitoring in water treatment,    hydrological monitoring, wastewater treatment,  swimming pools, fish ponds and fertilizers, chemicals,and biology",
    measurnmentPrinciple:
      "The pH sensor uses a composite electrode in which a glass indicating electrode and a reference electrode are combined to    measure the pH of the water. ",
    img: img04,
    features: [
      "Power supply and output isolation design to ensure electrical safety",
      "Power supply and communication chip built-in protection circuit, strong anti-interference ability",
      "Comprehensive protection circuit design for reliable operation without additional equipment",
      "Circuit part designed inside the electrode for easy installation and operation",
      "RS-485 transmission interface, MODBUS-RTU communication protocol, two-way communication, can receive remote commands",
      "Output more electrode diagnostic information, providing intelligent insights",
      "Internal integrated memory for storing calibration and setting information",
    ],
    attributes: [
      {
        name: "Main material",
        value: "Shell: PPS; Cable: PVC; Electrode: Glass core",
      },
      { name: "Measurement range", value: "0-14 pH" },
      { name: "Resolution", value: "0.01 pH" },
      { name: "Precision", value: "±0.1 pH" },
      { name: "Repeatability", value: "±0.1 pH" },
      { name: "Temperature range", value: "-10-110℃" },
      { name: "Temperature resolution", value: "0.1℃" },
      { name: "Temperature precision", value: "0.5℃" },
      { name: "Pressure range", value: "0-0.1Mpa" },
      { name: "Applicable Temperature", value: "0~60℃ (Non-freezing)" },
      { name: "Power supply", value: "12V DC" },
      { name: "Dimension", value: "Dia. 26mm*Length166mm" },
      { name: "Water Protective rate", value: "IP68 (Protective casing)" },
      {
        name: "Cable length",
        value: "Standard: 10m, maximum can be extended to 200m",
      },
    ],
  },
  {
    productId: "007",
    name: "PPH-500D pH Sensor",
    category: "Sensors",
    introduction:
      "Introducing our pH Sensor, built with a durable POM shell, designed to withstand demanding environments. It offers a wide measuring range of 0-14 pH, ensuring accurate pH readings. With a temperature range of 0-80°C and a pressure range of ≤0.6Mpa, it is suitable for a variety of applications. The sensor features a PT1000 temperature sensor for precise temperature measurements. It has a high slope of ≥95% and a rapid response time of ≤30 seconds, ensuring reliable and timely results. With an IP68/NEMA6P protection class and upper and lower R3/4 pipe thread mounting options, it is well-equipped to handle challenging conditions. The standard cable length is 10 meters, extendable up to 50 meters, providing flexibility in installation. Trust our pH Sensor for accurate and durable pH measurements in diverse industrial and laboratory settings.",
    principle:
      "pH describes the pH and basic properties of water. When pH<7.0, it is acidic, when pH=7.0, it  is neutral, and when pH>7.0, it is alkaline. The pH sensor measures the pH of water using a composite electrode that combines a glass indicator electrode and a reference electrode. The potential of the internal reference electrode  in the glass electrode is constant regardless of the pH of the solution to be measured. When the glass bubble is immersed in the test solution with changing H+ concentration, the difference between the stable potential of the reference electrode and the potential generated  by the glass ball will be read by the voltmeter and used as the measurement result. Data is stable, performance is reliable, and installation is simple. It is widely used in pH monitoring in sewage plants, water plants, water stations, surface water, aquaculture, industry and other fields. The technical specifications of the sensor are shown in Table 1. ",
    img: img05,
    attributes: [
      { name: "Main material", value: "POM shell" },
      { name: "Measuring range", value: "0-14 pH" },
      { name: "Temperature range", value: "0-80℃ (Not frozen)" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      { name: "Temperature", value: "PT1000" },
      { name: "Slope", value: "≥95%" },
      {
        name: "Response time",
        value: "≤30 Seconds (at 95% of the end value) (after stirring)",
      },
      { name: "Protection class", value: "IP68/NEMA6P" },
      { name: "Mounting thread", value: "Upper and lower R3/4 pipe thread" },
      { name: "Cable length", value: "Standard: 10M, Max. extended to 50M" },
    ],
    subImg: subImg005,
  },
  {
    productId: "008",
    name: "PEC-500A ",
    category: "Sensors",
    introduction:
      "Introducing our PPS Shell Conductivity Sensor: precise, reliable, and versatile. It covers a wide measurement range with automatic range switching. With an accuracy of ±2%F.S. and temperature compensation up to 60℃, it delivers accurate results in varying conditions. The sensor is compact, IP68 rated, and supports MODBUS RS485 communication. Installation is easy with its 3/4 mounting thread, and it comes with a standard 10-meter cable.",
    principleManagnment:
      "The conductivity sensor is a glass platinum electrode. In general, the voltage is in the form of a sine wave. Conductivity is determined by the ohmic formula based on voltage and current  values. ",
    img: img08,
    application:
      "It is widely used in the monitoring of conductivity in water treatment, hydrological monitoring, wastewater treatment,It is widely used in the monitoring of conductivity in swimming poolsIt is widely used in the monitoring of conductivity in fish pondsThe monitoring of conductivity in fertilizers, chemicals, and biology. ",
    features: [
      "Power supply and output isolation design to ensure electrical safety.",
      "Power supply and communication chip built-in protection circuit, strong anti-interference ability.",
      "Comprehensive protection circuit design, works reliably without additional isolation equipment.",
      "Circuit part designed inside the electrode, tolerates the environment well and eases installation operation.",
      "RS-485 transmission interface, MODBUS-RTU communication protocol, supports two-way communication and remote command reception.",
      "Output more electrode diagnostic information for enhanced intelligence.",
      "Internal integrated memory for calibration and setting information storage.",
      "Information can be memorized even after power off.",
    ],
    attributes: [
      { name: "Main materials", value: "PPS Shell" },
      {
        name: "Measurement range",
        value:
          "0.0~200.0 us/cm ; 0-2000us/cm ; 0.01-20.00ms/cm (Automatic switch)",
      },
      { name: "Accuracy", value: "±2%F.S." },
      {
        name: "Resolution",
        value:
          "Depending on the range: 0.01ms/cm, 0.1us/cm, 1us/cm (Automatic switch)",
      },
      { name: "Repeatability", value: "±1%" },
      { name: "Temperature compensation", value: "0-60℃" },
      { name: "Pressure range", value: "0-0.1 Mpa" },
      { name: "Electrode Temp. resistance", value: "0~60℃ (Non-freezing)" },
      { name: "Power supply", value: "12VDC" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Dimension", value: "Dia26mm*L 166mm" },
      { name: "Protective rate", value: "IP68 (Protective casing)" },
      { name: "Mounting thread", value: '3/4" thread' },
      {
        name: "Cable length",
        value: "Standard: 10M, the maximum can be extended 200m",
      },
    ],

    subImg: subImg005,
  },
  {
    productId: "009",
    name: "AAPDO-700",
    category: "Sensors",
    introduction:
      "AAPDO-700 Optical Dissolved Oxygen sensor adopts fluorescence method to measure dissolved oxygen. The cap of the sensor is coated with a luminescent material.Blue light from an LED illuminates the luminescent chemical. The luminescent chemical instantly becomes excited and releases red light. The time and intensity of red light are inversely proportional to the concentration of oxygen molecules. So the concentration of oxygen molecules is calculated. ",
    img: img09,
    application:
      "DO online monitoring of different technological processes such as regulating reservoir, biochemical pool and effluent of sewage treatment plant. DO online monitoring of water plant, surface water, industrial process water and aquaculture and etc. ",
    features: [
      "New type of oxygen sensitive membrane",
      "NTC temperature compensated function",
      "No oxygen consumption during measurement",
      "No flow rate and stirring requirement",
      "Breakthrough fluorescence technology",
      "Minimal maintenance required",
      "Built-in self-diagnosis function",
      "Plug-and-play sensor installation",
      "Factory calibration with optional field calibration",
      "Digital sensor with high anti-jamming capacity",
      "Standard digital signal output",
      "Integration and networking capability",
    ],
    attributes: [
      { name: "Model", value: "AAPDO-700" },
      {
        name: "Part Number",
        value: "AAPDO-700",
      },
      { name: "Accuracy", value: "±2%F.S." },
      {
        name: "Measurement range",
        value: "DO：0-20 mg/L or 0-200% saturation；Temperature：0-45 ℃ ",
      },
      {
        name: "Resolution",
        value: "0.01 mg/L        ",
      },
      { name: "Repeatability", value: "±0.3 mg/L" },
      { name: "Pressure range", value: "≤0.3 Mpa " },
      {
        name: "Calibration",
        value: "Air automated calibration, sample calibration",
      },
      {
        name: "Main material ",
        value:
          "Body ： SS316L （ fresh water ） ， Titanium alloy（Ocean marine）；Cover：PPS+ glass fiber；Cable： PUR",
      },
      {
        name: "Power supply  ",
        value: "AC：85-500 VAC (50/60HZ) DC：9~36 VDC",
      },
      { name: "Output", value: "3-way 4-20 mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response  value. ",
      },
      { name: "Communication protocol", value: "MODBUS RS485" },
      {
        name: "Storage temperature",
        value: "-15-60 ℃ ",
      },
      {
        name: "Measuring",
        value: "0-45 ℃（Non-freezing） ",
      },
    ],

    subImg: subImg009,
  },
  {
    productId: "010",
    name: "AAP-RCL-4000S ",
    category: "Analyzer",
    introduction:
      "  AAP-RCL-4000S residual chlorine/chlorine dioxide adopts advanced principle of constant voltage to measure residual chlorine/chlorine dioxide in water. The principle is adding a stable electric potential between polarized electrode and  reference electrode to make different measured components produce different current intensity. The analyzer calculates the concentration of the measured component by collecting and analyzing current signal. AAP-RCL-4000S residual chlorine/chlorine dioxide has simple structure, easy to clean and replace. Meanwhile, the  electrode need not to replace membrane and reagent when operating and the maintenance is simple to ensure the stability, reliability and accuracy of instrument for long-term working. ",
    img: img10,
    application:
      "Won't produce oxygen consumption when measuring and no requirement of flow rate and stirring. Factory calibration, not need calibration for a year and can carry out field calibration. Digital sensor, high anti-jamming capacity and far transmission distance. ",
    features: [
      "Won't produce oxygen consumption when measuring and no requirement of flow rate and stirring. ",
      "Factory calibration, not need calibration for a year and can carry out field calibration",
      "Digital sensor, high anti-jamming capacity and far transmission distance.",
    ],
    attributes: [
      { name: "Model", value: "AAP-RCL-4000S" },
      { name: "Part Number", value: "AAPRCL.4000.00.22" },
      { name: "Principle", value: "Constant voltage method" },
      {
        name: "Measurement range (Chlorine)",
        value: "0-2mg/L, 0-20 mg/L (optional)",
      },
      { name: "Measurement range (pH)", value: "5-8 pH" },
      {
        name: "Measurement Accuracy",
        value: "±3% or ±0.3 mg/L, whichever is greater",
      },
      { name: "Temperature compensation", value: "Manual or automatic" },
      { name: "Repeatability", value: "±0.3 mg/L" },
      { name: "Pressure range", value: "≤0.3 Mpa" },
      { name: "Calibration", value: "2-Point Calibration" },
      { name: "Flow Rate", value: "30-60 L/h" },
      { name: "Main material", value: "316L Stainless steel shell" },
      {
        name: "Power supply",
        value: "AC: 85-500VAC (50/60HZ), DC: 9-36VDC",
      },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value",
      },
      { name: "Communication protocol", value: "MODBUS RS485" },
      { name: "Operating temperature", value: "0-50°C (Non-freezing)" },
      { name: "Dimensions", value: "Dia 13.5mm * L 178.5mm" },
      { name: "Weight", value: "1.4KG" },
      { name: "Protective rate", value: "IP68/NEMA6P" },
      {
        name: "Cable length",
        value: "Standard: 10m, maximum can be extended to 100m",
      },
    ],
  },
  {
    productId: "011",
    name: "AADCOD ",
    category: "Sensors",
    introduction:
      "  AADCOD series COD/BOD/TSS/TOC sensor is a new generation of environmental protection type sensor launched by our company, which is reagent free, pollution-free, more economic and environmental protection. Small size, more convenient installation, online continuous water quality monitoring. Automatic compensation for turbidity interference, with automatic  cleaning device, even long-term monitoring still has excellent stability.  Many organic substances dissolved in water absorb UV-Visible spectrum. Therefore, the  total amount of organic pollutants in water can be measured by measuring the absorption  of these organic substances by UV-Visible spectrum within the wavelength of 200 nm to 800nm, which can automatically compensate the optical path attenuation and turbidity effects, thus achieving more stable and reliable measurement values ",
    img: img11,
    application:
      "Won't produce oxygen consumption when measuring and no requirement of flow rate and stirring. Factory calibration, not need calibration for a year and can carry out field calibration. Digital sensor, high anti-jamming capacity and far transmission distance. ",
    features: [
      "Digital sensor, RS-485 output, support MODBUS ",
      "No reagents, no pollution, more economical and environmentally friendly",
      "Can measure COD, BOD, TSS, TOC and other parameters.",
      "Automatic compensation for turbidity interference for excellent performance.",
    ],
    attributes: [
      { name: "Measuring method", value: "UV-Vis spectroscopy" },
      { name: "Wavelength", value: "190 - 750 nm" },
      { name: "Detector", value: "512 pixels" },
      { name: "Optical path", value: "1 nm , 3 mm , or 10 mm  " },
      { name: "Accuracy", value: "+/- 2% on standard solution" },

      { name: "Response time", value: "< 1 min" },
      {
        name: "Turbidity Comensation",
        value: "Integrated by reference wavelength method",
      },

      { name: "Light source life time", value: "> 10 years" },
      { name: "Mounting", value: "Immersion , maximum 10 meters" },
      {
        name: "Probe cleaning system",
        value: "Self Cleaning with Wiper Mechanism",
      },
      { name: "Cable length", value: "10 meters" },
      { name: "Sensor protection", value: "IP68" },
      { name: "Operating temperature", value: "0 ℃  to 50 ℃ " },
      { name: "Operating pressure", value: "0 Bar to 3 Bar" },
      { name: "Velocity", value: "3 m/s max" },
      {
        name: "Body Material",
        value: "Stainless steel 316L (Titanium as an option)",
      },
      {
        name: "Wet materials",
        value: "Quartz , FKM (Viton) , Stainless steel or titanium (option)",
      },
      { name: "Demensions", value: "54 x 500 mm" },
      { name: "Weight", value: "3 kg" },
      { name: "Probe warranty", value: "1 year" },
    ],
  },
  {
    productId: "012",
    name: "AAP-PC-800 ",
    img: img12,
    category: "Controllers",
    introduction:
      "AAP-PC-800 when used with portable electrodes, the PMI800  portable analyzer can measure a variety of parameters such  as pH, ORP, Conductivity (convertible Salinity & TDS),   Dissolved oxygen, Turbidity, Suspended solids, Chlorophyll,   Blue-green algae etc. The connected electrode type can be   automatically identified; single channel and dual channel  configurations are available. It has the advantages of comfortable operation, convenient testing and wide application. ",
    features: [
      "Protection Rating: IP67",
      "Display: 3.5-inch Color Screen",
      "Interface: Beautiful Menu Design, Easy to Operate",
      "Ergonomic Design: Curved Shape for Comfortable Hand Grip",
      "Non-Slip Grip: Rubber Hand Strap for Secure Handling in Wet Environments",
      "Data Storage Function: 8GB Storage Space",
      "Data Export: Data can be Exported through USB Interface",
      "Built-in Rechargeable Battery: Convenient USB Charging without Battery Disassembly",
      "Automatic Sensor Recognition: Identifies Connected Sensor Type Automatically",
      "Adaptive Reading Interface: Reading Interface Automatically Adjusts based on Connected Sensor",
      "Sensor Parameterization: Ability to Set Sensor Parameters",
      "Sensor Calibration: Capability to Calibrate the Sensor",
    ],
    attributes: [
      { name: "Power Supply", value: "12VDC" },
      { name: "Protection Level", value: "IP68" },
      { name: "Protection Class", value: "IP67" },
      { name: "Battery Capacity", value: "8G data storage space" },
      { name: "Power Dissipation", value: "3W" },
      { name: "Storage Temperature", value: "-15~60 ℃" },
      { name: "Operating Temperature", value: "0~50 ℃" },
      { name: "Measuring Temperature", value: "0~45 ℃" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      {
        name: "Maximum Withstand Pressure Depth",
        value: "30m (With ion selective electrode: 10m)",
      },
      {
        name: "Display Screen",
        value: "3.5-inch color display screen with adjustable backlight",
      },
      {
        name: "Built-in Battery",
        value: "Battery specifications: 4 x 3.7V rechargeable lithium battery",
      },
    ],
  },
  {
    productId: "013",
    name: "AAD-IC-100-4  ",
    img: img13,
    category: "Controllers",
    introduction:
      "AAD-IC-100-4 The online general-purpose   transmitter is independently developed by our  company. It is industrial-grade standard design,     stable and reliable, easy to operate, and can support   all digital sensors. One channel of 4 ~ 20mA output,  photoelectric isolation, strong anti-interference   ability, one channel of RS485 output, convenient for  users to network, one channel of relay output with  isolation, users can set the upper and lower limits, so  as to control the on and off state of the equipment.",
    features: [
      "Automatic Identification: Supports All-Digital Sensors",
      "Plug and Play: Easy Sensor Installation",
      "One-Way 4-20mA Output: Analog Signal Transmission",
      "One-Way RS485 Digital Output: Digital Signal Transmission",
      "Relay Control: User-Set Upper and Lower Limits",
      "Industrial Grade Standard: Ensures Robust Performance",
      "Output Isolation: Enhances Signal Integrity",
      "Strong Anti-Interference Ability: Reliable Measurements in Noisy Environments",
    ],
    attributes: [
      { name: "Part Number", value: "AAD-IC100.400.4" },
      {
        name: "Sensor Type",
        value:
          "Supports digital sensors such as optical dissolved oxygen, Four electrode conductivity, Fiber turbidity, chlorophyll, blue-green algae, oil in water sensor, and sludge concentration sensor, pH, and ORP",
      },
      { name: "Power Supply", value: "110~220V" },
      { name: "Controller Size", value: "192*64 LCD" },
      { name: "Protection Level", value: "ABS housing, IP65" },
      { name: "Temperature Range", value: "0~55°C, avoid direct sunlight" },
      {
        name: "Installation Method",
        value: "Wall or panel mounting (opening size 138*138*)",
      },
      {
        name: "Transmitting Output",
        value:
          "1 channel isolated 4~20mA output, 1 channel digital output, 1 channel low point relay output",
      },
      { name: "Storage Temperature", value: "-40 ~ 85°C" },
      { name: "Environment Humidity", value: "≤ 80%" },
      {
        name: "Temperature / Pressure Compensation",
        value: "Built-in instrument, automatic compensation 50~115KPa",
      },
      { name: "Operating Temperature", value: "0~50°C" },
      { name: "Air Pressure Compensation", value: "Automatic" },
      { name: "Weight", value: "0.8kg" },
    ],
  },
  {
    productId: "014",
    name: " AAP-DO100",
    img: img09,
    category: "Sensors",
    introduction:
      "AAP-DO100 is a cutting-edge dissolved oxygen sensor designed for precise and reliable measurements in various environments. It features a new oxygen-sensitive membrane with NTC temperature compensation, ensuring excellent repeatability and stability. With breakthrough fluorescence technology, it eliminates the need for membranes and electrolytes, resulting in minimal maintenance requirements. The sensor comes with a built-in self-diagnosis function for data accuracy assurance and offers plug-and-play installation for quick setup. Its factory calibration ensures no calibration is needed for a year, and it can be field-calibrated as well. The AAP-DO100 boasts a digital sensor with high anti-jamming capacity and far transmission distance, allowing seamless integration and networking without a controller.",
    features: [
      "New Oxygen Sensitive Membrane: Improved Measurement Repeatability and Stability",
      "NTC Temperature Compensated: Accurate Measurements in Different Temperatures",
      "No Oxygen Consumption: No Requirement of Flow Rate and Stirring",
      "Breakthrough Fluorescence Technology: Minimal Maintenance Required",
      "Built-in Self-Diagnosis: Ensures Data Accuracy",
      "Plug-and-Play Sensor: Quick and Easy Installation",
      "Factory Calibration: No Calibration Needed for a Year, Field Calibration Supported",
      "Digital Sensor: High Anti-Jamming Capacity and Far Transmission Distance",
      "Standard Digital Signal Output: Integration and Networking with Other Equipment without Controller",
    ],
    attributes: [
      { name: "Model", value: "AAP-DO100" },
      { name: "Output Resolution", value: "0.01mg/L" },
      {
        name: "Calibration",
        value: "Air automated calibration, sample calibration",
      },
      { name: "Part Number", value: "AAP-DO100.22" },
      {
        name: "Repeatability",
        value: "DO:±3% or ±0.3 mg/L, whichever is greater",
      },
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (Ocean marine); Cover: PPS+ glass fiber; Cable: PUR",
      },
      { name: "Power Supply", value: "AC：85-500VAC (50/60HZ) DC：9~36VDC" },
      { name: "Pressure Range", value: "≤0.3Mpa" },
      {
        name: "Measurement Range",
        value: "DO: 0-20 mg/L or 0-200% saturation; Temperature: 0-45 ℃",
      },
      { name: "Storage Temperature", value: "-15-60℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Dimensions", value: "Dia49.5mm*L 251.5mm" },
      { name: "Weight", value: "1.4 Kg" },
      { name: "Protective Rate", value: "Sensor: IP68/NEMA6P" },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      {
        name: "Compatible Controller",
        value: "AAC100-200; AAC100-400; AAP-C1000-200; AAP-PC-800",
      },
      { name: "Measurement Accuracy", value: "±0.5" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
    ],
  },
  {
    productId: "015",
    name: " AAP-ODO200",
    img: img09,
    category: "Sensors",
    introduction:
      "AAP-ODO200 is an advanced dissolved oxygen sensor designed to deliver precise and reliable measurements in diverse environments. With its durable construction featuring SUS316L and Titanium alloy, it is suitable for both fresh water and marine applications. The sensor offers high resolution and repeatability, ensuring accurate results for dissolved oxygen levels and temperature. Its broad measurement range of 0-20 mg/L or 0-200% saturation and automated calibration capabilities make it versatile for various industries. With support for MODBUS RS485 communication protocol and three-way relays, the AAP-ODO200 ensures seamless integration and control in complex systems. Its dependable performance and automated calibration simplify operation and maintenance for a hassle-free experience.",
    features: [
      "Non-Oxygen Consumption: The sensor won't produce oxygen consumption when measuring and requires no flow rate and stirring.",
      "Factory Calibration: Pre-calibrated from the factory, no need for calibration for a year, and supports field calibration.",
      "Digital Sensor: Provides high anti-jamming capacity and far transmission distance for accurate dissolved oxygen measurements.",
    ],
    attributes: [
      { name: "Model", value: "AAP-ODO200" },
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (Ocean marine); Cover: PPS+ glass fiber; Cable: PUR",
      },
      { name: "Resolution", value: "0.01mg/L" },
      {
        name: "Repeatability",
        value: "DO: ±3% or ±0.3 mg/L, whichever is greater; Temperature: ±0.5℃",
      },
      { name: "Pressure Range", value: "≤0.3Mpa" },
      {
        name: "Calibration",
        value: "Air automated calibration, sample calibration",
      },
      { name: "Part Number", value: "AAP-ODO.200.00.22" },
      {
        name: "Measurement Range",
        value: "DO: 0-20 mg/L or 0-200% saturation; Temperature: 0-45℃",
      },
      {
        name: "Measurement Accuracy",
        value: "DO: ±0.3mg/L; Temperature: ±0.5℃",
      },
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Communication Protocol", value: "MODBUS RS485" },
    ],
  },
  {
    productId: "016",
    name: "AAPSS-800S    ",
    category: "Sensors",
    img: img14,
    category: "Sensors",
    introduction:
      "The AAPTSS-800 is a highly capable sensor designed for precise and reliable measurements in various environments. With its advanced technology and durable construction, it offers a broad measurement range and high accuracy. The sensor's plug-and-play installation and versatile communication protocol make it easy to integrate with other equipment. With excellent repeatability and a self-diagnosis function, the AAPTSS-800 ensures data accuracy and reliability. Its compact size and robust design, along with optional automatic cleaning, reduce maintenance efforts. Whether in fresh water or marine applications, the AAPTSS-800 excels at delivering accurate and consistent results for a wide range of measurement requirements.",
    features: [
      "Dual-Beam Infrared Scattered Light Photometer Detection: Utilizes advanced technology for accurate and stable measurements.",
      "Built-in Self-Diagnosis Function: Ensures data accuracy and reliability.",
      "Plug-and-Play Sensors: Quick and easy installation for user convenience.",
      "Optional Automatic Cleaning Function: Reduces sensor maintenance and enhances usability.",
      "ISO7027 Standard Method: Employs Infrared light scattering technique to eliminate sample color effects.",
      "Digital Sensor: High anti-jamming capacity for reliable performance in noisy environments.",
      "Standard Digital Signal Output: Enables integration and networking with other equipment without a controller.",
    ],
    attributes: [
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (Ocean marine); Cover: PPS+ glass fiber; Cable: PUR",
      },
      { name: "Part Number", value: "AAPTSS.800.00.22" },
      {
        name: "Measurement Range",
        value: "0.01-20000 mg/L, 0.01-45000 mg/L, 0.01-120000 mg/L",
      },
      {
        name: "Measurement Accuracy",
        value:
          "Less than ±5% of measured value (Depending on the homogeneity of sludge)",
      },
      { name: "Resolution", value: "0.01-1mg/L, based on range" },
      { name: "Repeatability", value: "±2%" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "≤2.5m/s, 8.2ft/s" },
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Storage Temperature", value: "-15-60℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Dimensions", value: "Dia 49.5mm * L 251.5mm" },
      { name: "Weight", value: "1.4KG" },
      { name: "Protective Rate", value: "Sensor: IP68/NEMA6P" },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      { name: "Model", value: "AAPTSS-800" },
    ],
  },
  {
    productId: "017",
    name: " AAPTurb-800S  ",
    category: "Sensors",
    introduction:
      "The AAPTurb-800S is a highly capable turbidity sensor known for its accurate and stable measurements. Equipped with advanced infrared scattered light technology, it offers excellent repeatability and reliability. With a built-in self-diagnosis function and optional automatic cleaning, it ensures data accuracy while reducing maintenance efforts. The sensor's digital technology provides high anti-jamming capacity and enables seamless integration with other equipment. The AAPTurb-800S is a user-friendly solution with plug-and-play installation, making it suitable for a wide range of applications in different industries.",
    img: img14,
    features: [
      "Dual-Beam Infrared Scattered Light Photometer Detection: Utilizes cutting-edge technology for accurate and stable measurements.",
      "Built-in Self-Diagnosis Function: Ensures data accuracy and reliability by constantly monitoring sensor performance.",
      "Optional Automatic Cleaning Function: Reduces sensor maintenance with an automated cleaning brush.",
      "Digital Sensor with High Anti-Jamming Capacity: Provides reliable performance in noisy environments.",
      "ISO7027 Standard Method: Utilizes Infrared light scattering technique to eliminate sample color effects for precise measurements.",
      "Standard Digital Signal Output: Facilitates easy integration and networking with other equipment without the need for a controller.",
      "Plug-and-Play Sensors: Enables quick and straightforward installation, ensuring hassle-free setup and operation.",
    ],
    attributes: [
      { name: "Model", value: "AAPTurb-8000      " },
      { name: "Output", value: "3-way 4-20mA" },

      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Resolution", value: "0.01~0.1NTU, based on range" },
      { name: "Repeatability", value: "±2%" },
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (Ocean marine); Cover: PPS+ glass fiber; Cable: PUR",
      },
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "≤2.5m/s, 8.2ft/s" },
      {
        name: "Dimensions",
        value:
          "Sensor: Dia 60 mm * L 261 mm; Transmitter: 145*125*162mm (L*W*H)",
      },
      { name: "Weight", value: "Sensor: 1.65KG; Transmitter: 1.35KG" },
      {
        name: "Protective Rate",
        value: "Sensor: IP68/NEMA6P; Transmitter: IP65/ NEMA4X",
      },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      { name: "Part Number", value: "AAPTurb.8000.00.22" },
      {
        name: "Measurement Range",
        value: "Turbidity: 0.01-100 NTU, 0.01−4000 NTU",
      },
      { name: "Storage Temperature", value: "-15-60℃" },
      {
        name: "Measurement Accuracy",
        value:
          "Less than ±2% of the measured reading or ±0.1NTU, whichever is greater",
      },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
    ],
  },
  {
    productId: "018",
    name: "AAPTUL-7000",
    category: "Analyzer",
    img: img15,
    introduction:
      "The AAPTUL-7000 is a robust and reliable turbidity sensor, designed to deliver accurate and stable measurements within a range of 0.01 to 100 NTU. With its durable construction and plug-and-play installation, it offers user-friendly operation and easy maintenance. Ideal for environmental monitoring and water treatment applications, this sensor ensures precise data for critical processes. Its high accuracy and stability make it a valuable tool for industries seeking consistent and reliable turbidity measurements. Whether in freshwater or marine environments, the AAPTUL-7000 proves to be a dependable choice for continuous monitoring needs.",
    features: [
      "Stable Data and Good Repeatability: Provides reliable and consistent turbidity measurements.",
      "Simple Cleaning and Maintenance: Easy-to-clean design reduces maintenance efforts.",
      "Continuous Readings: Designed for continuous monitoring of turbidity levels.",
      "Plug-and-Play Sensors: Enables quick and straightforward installation for user convenience.",
      "Low-Range Turbidity: Suitable for measuring low levels of turbidity.",
    ],
    attributes: [
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (Ocean marine); Cover: PPS+ glass fiber; Cable: PUR",
      },
      { name: "Part Number", value: "AAPTUL-7000.00.22" },
      { name: "Measurement Range", value: "Turbidity: 0.01-100 NTU" },
      {
        name: "Measurement Accuracy",
        value:
          "Less than ±2% of the measured reading or ±0.1NTU, whichever is greater",
      },
      { name: "Resolution", value: "0.01~0.1NTU, based on range" },
      { name: "Repeatability", value: "±2%" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "≤2.5m/s, 8.2ft/s" },
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Storage Temperature", value: "-15-60℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Dimensions", value: "Sensor: Dia 60 mm * L 261 mm" },
      { name: "Weight", value: "Sensor: 1.65KG" },
      { name: "Protective Rate", value: "Sensor: IP68/NEMA6P" },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      { name: "Model", value: "AAPTUL-7000" },
    ],
  },
  {
    productId: "019",
    name: "AAPCPHL-800A",
    category: "Sensors",
    introduction:
      "The AAPCPHL-800A is an advanced sensor for precise monitoring of Rhodamine B Dye in water. With a wide measurement range of 0-500 ug/L and ±5% accuracy, it ensures reliable detection even at low concentrations. Its compact and durable design, featuring IP68/NEMA6P protection, guarantees dependable performance in various environments. The sensor's 3-way 4-20mA output and MODBUS RS485 protocol enable seamless integration with compatible controllers. Ideal for monitoring Blue-Green Algae distribution in waters with turbidity below 50NTU, the AAPCPHL-800A is an invaluable tool for environmental monitoring.",
    img: img16,
    features: [
      "Fluorescent Measuring Target Parameter: Enables identification of pigment before being affected by potential water bloom.",
      "Rapid Detection: Avoids the need for extraction or lengthy water sample shelving, ensuring timely results.",
      "Digital Sensor with High Anti-Jamming Capacity: Provides reliable performance even in noisy environments.",
      "Far Transmission Distance: Facilitates seamless data transmission over long distances.",
      "Standard Digital Signal Output: Allows integration and networking with other equipment without a controller.",
      "Plug-and-Play Sensors: Ensures quick and effortless installation for user convenience.",
      "Reverse Polarity Protection: Safeguards the sensor from potential power issues.",
    ],
    attributes: [
      {
        name: "Main Material",
        value:
          "Body: SUS316L (fresh water), Titanium alloy (marine); Cover: POM; Cable: PUR",
      },
      { name: "Power Supply", value: "DC 6~12V, current < 50mA" },
      { name: "Pressure Range", value: "≤0.4Mpa" },
      {
        name: "Requirements",
        value:
          "Suggest a multipoint monitoring for the distribution of Blue-Green Algae in water as it is very uneven. Water turbidity is below 50NTU.",
      },
      { name: "Part Number", value: "AAPCPHL.800A.00.22" },
      { name: "Measurement Range", value: "0-500 ug/L" },
      {
        name: "Measurement Accuracy",
        value:
          "±5% of the signal level corresponding value of 1ppb RhodamineB Dye",
      },
      { name: "Resolution", value: "0.01ug/L" },
      { name: "Repeatability", value: "±3%" },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Storage Temperature", value: "-15-50℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Dimension and Weight", value: "Dia 30mm * L 223mm, 0.55KG" },
      { name: "Protective Rate", value: "Sensor: IP68/NEMA6P" },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      {
        name: "Compatible Controller",
        value: "AAC100-200; AAC100-400; AAP-C1000-200; AAP-PC-800",
      },
      { name: "Model", value: "AAPCPHL-800A" },
    ],
  },
  {
    productId: "020",
    name: "AAPBGA-800A    ",
    category: "Sensors",
    introduction:
      "The AAPBGA-800A is an advanced sensor designed for precise monitoring of Blue-Green Algae in water. With a wide measurement range of 200 to 300,000 cells/mL and an accuracy of ±5%, it ensures reliable detection of algae levels. Its compact design, featuring SUS316L + PVC and POM materials, guarantees durability and efficient performance in various environments. The sensor offers a 3-way 4-20mA output and supports MODBUS RS485 communication, allowing easy integration with compatible controllers. Ideal for multipoint monitoring of uneven algae distribution, the AAPBGA-800A is a valuable tool for environmental monitoring and water quality assessment.",
    img: img16,
    features: [
      "Fluorescent Measuring Target Parameter: Allows identification before being affected by potential water bloom.",
      "Rapid Detection: Enables fast and direct detection without the need for extraction or lengthy water sample shelving.",
      "Digital Sensor with High Anti-Jamming Capacity: Ensures reliable performance even in noisy environments.",
      "Far Transmission Distance: Facilitates seamless data transmission over long distances.",
      "Standard Digital Signal Output: Enables easy integration and networking with other equipment without the need for a controller.",
      "Plug-and-Play Sensors: Ensures quick and effortless installation for user convenience.",
    ],
    attributes: [
      { name: "Repeatability", value: "±3%" },
      {
        name: "Main Material",
        value: "Body: SUS316L + PVC; Cover: POM; Cable: PUR",
      },
      { name: "Power Supply", value: "DC 6~12V, current < 50mA" },
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      {
        name: "Requirements",
        value:
          "Suggest a multipoint monitoring for the distribution of Blue-Green Algae in water as it is very uneven. Water turbidity is below 50NTU.",
      },
      { name: "Pressure Range", value: "≤0.4Mpa" },
      {
        name: "Dimension and Weight",
        value:
          "Sensor: Dia 30mm * L 223mm, 0.55KG; Transmitter: 145*125*162mm(L*W*H), 1.35KG",
      },
      {
        name: "Protective Rate",
        value: "Sensor: IP68/NEMA6P; Transmitter: IP65/NEMA4X",
      },
      {
        name: "Cable Length",
        value: "Standard: 10m, the maximum may be extended to 100m",
      },
      {
        name: "Compatible Controller",
        value: "AAC100-200; AAC100-400; AAP-C1000-200; AAP-PC-800",
      },
      { name: "Part Number", value: "AAPBGA.800A.00.22" },
      { name: "Measurement Range", value: "200—300,000 cells/mL" },
      {
        name: "Measurement Accuracy",
        value:
          "±5% of the signal level corresponding value of 1ppb RhodamineB Dye",
      },
      { name: "Resolution", value: "20 cells/mL" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Storage Temperature", value: "-15-50℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Model", value: "AAPBGA-800A" },
    ],
  },
  {
    productId: "021",
    name: "AAPDS-300 ",
    introduction:
      "The AAPDS-300 sensor is a high-precision distance measurement device designed for a range of 2-100cm. With exceptional accuracy of ±0.3cm or 5% of the measured value, it ensures reliable results. Its robust construction and IP68/NEMA6P protection guarantee dependable performance in challenging environments. With a 3-way 4-20mA output and MODBUS RS485 communication, it allows easy integration and networking with other equipment. Ideal for various applications that demand accurate distance measurements.",
    category: "Sensors",
    img: img16,
    features: [
      "Built-in Self-Diagnosis: Ensures accurate and reliable data.",
      "Reverse Polarity Protection: Safeguards the sensor from potential power issues.",
      "Time Display and Data Storage: Offers convenient historical data viewing functions.",
      "Dual-Beam Infrared Scattering Photometer: Provides good repeatability and stability.",
      "Optional Wireless Data Transmission: Allows for data transmission without wires.",
      "Optional Cleaning Brush Function: Reduces the need for frequent sensor maintenance.",
      "Digital Sensor with Anti-Interference: Ensures strong performance and long transmission distance.",
      "Standard Digital Signal Output: Enables integration and networking with other equipment without a transmitter.",
      "Plug-and-Play Installation: Convenient and quick on-site sensor setup.",
      "RS485 A/B End Power Supply Connection: Provides added protection during installation.",
    ],
    attributes: [
      { name: "Output", value: "3-way 4-20mA" },
      {
        name: "Relay",
        value:
          "Three-way relays, programmed response parameter and response value.",
      },
      { name: "Cable Length", value: "2-100cm" },
      {
        name: "Size",
        value: "Sensor: D60mm * L254mm; Transmitter: 145×125×162mm (L×W×H)",
      },
      { name: "Weight", value: "Sensor: 1.65KG; Transmitter: 1.35KG" },
      {
        name: "Protective Rate",
        value: "Sensor: IP68/NEMA6P; Transmitter: IP65/NEMA4X",
      },
      { name: "Storage Temperature", value: "-15-50℃" },
      { name: "Measuring Temperature", value: "0-45℃ (Non-freezing)" },
      { name: "Part Number", value: "AAPBGA.800A.00.22" },
      {
        name: "Measurement Range",
        value: "Deviation value calibration 2-100cm",
      },
      {
        name: "Measurement Accuracy",
        value: "±0.3cm or 5% of value, whichever is greater",
      },
      { name: "Pressure Range", value: "≤0.4Mpa" },
      { name: "Flow Rate", value: "Calibration slope ≤2.5m/s, 8.2ft/s" },
      {
        name: "Power Supply",
        value: "AC Power: 85-500VAC (50/60HZ), DC Power: 9~36VDC",
      },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Model", value: "AAPDS-300" },
      {
        name: "Compatible Controller",
        value: "AAC100-200; AAC100-400; AAP-C1000-200; AAP-PC-800",
      },
      {
        name: "On-site Installation",
        value: "Convenient and quick, enabling plug and play.",
      },
    ],
  },
  {
    productId: "022",
    name: "AAD-IMC-100-12",
    introduction:
      "The AAD-IMC-100-12 is a versatile and robust controller designed for efficient and precise monitoring of various parameters. With a large 192*64 LCD display, it offers a user-friendly interface for easy data visualization. The controller supports up to 12 compatible sensors, including pH, DO, EC, TDS, COD, TOC, BOD, TSS, and more, enabling comprehensive multi-parameter monitoring. Its durable ABS housing with IP65 protection ensures reliable performance in challenging environments. With built-in instrument compensation and various output options, the AAD-IMC-100-12 is a reliable solution for a wide range of industrial applications.",
    img: img17,
    category: "Controllers",
    features: [
      "Touchscreen Colour Display: Large and eye-catching interface for convenient usage.",
      "Self-Recognition Function: Automatically recognizes up to 12 branded sensors.",
      "Efficient Calibration: Auxiliary calibration sensor for quick and efficient calibration.",
      "Multi-Parameter Monitoring: Simultaneously monitors COD, BOD, TSS, TOC, pH, temperature, OIW, Ammonia Nitrogen, Nitrate Nitrogen, dissolved oxygen, conductivity, and more with up to 12 connected sensors.",
      "Easy Integration: Standard RS485 Modbus-RTU protocol and support for third-party device access.",
      "High Customizability: Equipment can be customized with logos, names, and cabinet appearance.",
    ],
    attributes: [
      { name: "Part Number", value: "AAD-IMC100.1200.12" },
      { name: "Controller Size", value: "300*300*170mm" },
      { name: "Weight", value: "2 kg" },
      { name: "Display Size", value: "225*160*42mm" },
      { name: "Operating Temperature", value: "0~55°C, avoid direct sunlight" },
      { name: "Storage Temperature", value: "-40~85°C" },
      { name: "Temperature Range", value: "0~50°C" },
      { name: "Display", value: "192*64 LCD" },
      {
        name: "Compatible Sensor Type (Up to 12 sensors)",
        value: "pH, DO, EC, TDS, COD, TOC, BOD, TSS, TUR, and more...",
      },
      {
        name: "Air Pressure Compensation",
        value: "Built-in instrument, automatic compensation 50~115KPa",
      },
      { name: "Protection Level", value: "ABS housing, IP65" },
      { name: "Environment Humidity", value: "≤80%" },
      { name: "Power Supply", value: "110~220V" },
      { name: "Transmitting Output", value: "4-20mA/RS485/customized" },
      { name: "Power Consumption", value: "4W" },
      {
        name: "Installation Method",
        value: "Wall or panel mounting (opening size 138*138*)",
      },
    ],
  },
  {
    productId: "023",
    name: "AADOIW-800 ",
    category: "Sensors",
    introduction:
      "The AADOIW-800 is a highly precise oil in water sensor based on ultraviolet fluorescence technology. It offers a wide detection range from 0 to 50ppm and ensures accurate measurements with a precision of 3%. The sensor is designed for efficient monitoring of oil levels in water, unaffected by suspended solids. With support for RS-485 and MODBUS protocol, it allows seamless integration with compatible controllers like AAD-IC-100-4 and AAD-IMC-100-12. Its durable construction with IP68 protection and optional self-cleaning brush ensures reliable performance in various industrial applications.",
    img: img18,
    features: [
      "Digital Sensor: Offers accurate and precise measurements.",
      "RS-485 Output: Allows for data transmission using MODBUS protocol.",
      "Automatic Cleaning Brush: Eliminates the impact of oil on measurements.",
      "Unique Optical and Electronic Filtering Techniques: Eliminate effects of ambient light on measurements.",
      "Unaffected by Suspended Solids in Water: Ensures reliable performance even in challenging environments.",
    ],
    attributes: [
      { name: "Precision", value: "3%" },
      { name: "Part Number", value: "AADOIW.800.00.22 / AADOIWSF.800.00.22" },
      {
        name: "Product",
        value: "Oil in water sensor / Self-cleaning oil in water sensor",
      },
      { name: "Principle", value: "Ultraviolet fluorescence method" },
      { name: "Range", value: "0-50ppm" },
      { name: "Protection Level", value: "IP68" },
      { name: "Sensor Interface", value: "Support RS-485, MODBUS protocol" },
      { name: "Assembly", value: "Input type" },
      {
        name: "Power Information",
        value: "DC 5~12V, current <50mA (when not cleaned)",
      },
      { name: "Size", value: "Φ45*175.8 mm" },
      {
        name: "Probe Cable Length",
        value: "5 meters (default,) can be customized",
      },
      { name: "Resolution", value: "3%" },
      { name: "Detection Limit", value: "0.1ppm" },
      { name: "Housing Material", value: "SS316/ titanium a" },
      { name: "Self-Cleaning Brush", value: "No / Have" },
      { name: "Optical Window", value: "According to the actual oil sample" },
      {
        name: "Compatible Controllers",
        value: "Model AADOIW-800 / AADOIWSC-800",
      },
      { name: "Air Pressure Compensation", value: "Optical fiber" },
    ],
  },
  {
    productId: "024",
    name: "AADAN-800S",
    category: "Sensors",
    introduction:
      "The AADAN-800S is a highly accurate and reliable sensor designed for measuring Ammonia Nitrogen (NH4-N) levels in water. With a pH range of 4-10 and a precision of ±0.1, it ensures precise and consistent readings. The sensor features a self-cleaning brush that prevents microbial adhesion, extending maintenance intervals. Its IP68 protection allows it to operate up to 10 meters underwater, making it suitable for various environmental applications. Compatible with AAD-IC-100-4 and AAD-IMC-100-12 controllers, the AADAN-800S supports RS-485 and MODBUS protocol for seamless integration and data transmission.",
    img: img19,
    features: [
      "Digital Sensor: Offers accurate and precise measurements.",
      "RS-485 Output: Allows for data transmission using MODBUS protocol.",
      "Eco-Friendly: No reagents, reducing pollution and promoting environmental sustainability.",
      "Automatic Compensation: Automatically compensates for pH and temperature in water for enhanced accuracy.",
      "Self-Cleaning Brush: Prevents microbial adhesion and extends maintenance intervals.",
    ],
    attributes: [
      { name: "pH Range", value: "4-10" },
      { name: "pH Accuracy", value: "±0.1" },
      { name: "pH Resolution", value: "0.01" },
      { name: "Part Number", value: "AADAN.800.00.22" },
      { name: "AN Range", value: "0-1000mg/L NH4-N" },
      { name: "AN Precision", value: "3%" },
      { name: "AN Resolution", value: "0.1 mg/L" },
      { name: "Protection Level", value: "IP68" },
      { name: "Power Information", value: "RS-485, MODBUS protocol" },
      { name: "Deepest Depth", value: "10 meters underwater" },
      { name: "Temperature Range", value: "0 ~ 50°C" },
      {
        name: "Probe Cable Length",
        value: "5 meters (default), can be customized",
      },
      { name: "Housing Material", value: "POM (An Engineering Thermoplastic)" },
      {
        name: "Compatible Controllers",
        value: "AAD-IC-100-4 and AAD-IMC-100-12",
      },
      { name: "Sensor Interface Support", value: "Input type" },
      { name: "Assembly", value: "RS-485, MODBUS protocol" },
    ],
  },
  {
    productId: "025",
    name: "AADNS-800 ",
    category: "Sensors",
    introduction:
      "The AADNS-800 is a highly accurate and reliable sensor designed for measuring Nitrate (NO3-) levels in water. With a pH range of 4-10 and a precision of ±0.1, it ensures precise and consistent readings. The sensor features a digital RS-485 output with MODBUS protocol for seamless data transmission and integration with compatible controllers like AAD-IC-100-4 and AAD-IMC-100-12. Its IP68 protection allows it to operate in harsh environments, while the optional measurement of Potassium and Sodium provides additional flexibility. The AADNS-800 is an efficient and versatile solution for water quality monitoring and environmental applications.",
    img: img20,
    features: [
      "Digital Sensor: Provides accurate and precise measurements.",
      "RS-485 Output: Supports MODBUS protocol for data transmission.",
      "Economical and Environmentally Friendly: Enables real-time online monitoring.",
      "Automatic pH and Temperature Compensation: Ensures accurate readings.",
      "High Precision and Stability: Offers reliable and consistent results.",
    ],
    attributes: [
      { name: "pH Range", value: "4-10" },
      { name: "pH Accuracy", value: "±0.1" },
      { name: "pH Resolution", value: "0.01" },
      { name: "Protection Level", value: "IP68" },
      { name: "Optional", value: "0.1ppm" },
      { name: "Housing Material", value: "POM (An Engineering Thermoplastic)" },
      { name: "Part Number", value: "AADNS.800.00.22" },
      { name: "Nitrate Range", value: "0~800mg/l NO3-" },
      { name: "Nitrate Precision", value: "3%" },
      { name: "Nitrate Resolution", value: "0.1ppm" },
      { name: "Temperature Range", value: "0〜50℃" },
      { name: "Power Supply", value: "DC 6~12V, current<50mA" },
      {
        name: "Output Signal",
        value: "Digital RS-485 output, MODBUS protocol",
      },
      { name: "Cable Length", value: "5 meters (default), can be customized" },
      {
        name: "Compatible Controller",
        value: "AAD-IC-100-4 and AAD-IMC-100-12",
      },
      { name: "Optional", value: "Potassium, Sodium" },
    ],
  },
];

export default products;
