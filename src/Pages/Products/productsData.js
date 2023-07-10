import img01 from "./productImages/img001.png";
import img02 from "./productImages/img002.png";
import img03 from "./productImages/img003.png";
import img04 from "./productImages/img004.jpg";
import img05 from "./productImages/img005.jpg";
import img08 from "./productImages/img008.jpg";
import img09 from "./productImages/img009.png";
import img10 from "./productImages/img010.png";
import img11 from "./productImages/img011.png";
import subImg005 from "./productImages/subImg005.png";
import subImg009 from "./productImages/subImg009.png";

const products = [
  {
    productId: "001",
    name: "SINGLE/DUAL CHANNEL CONTROLLER  ",
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
    name: "MULTI-PARAMETER CONTROLLER",
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
    name: "PEC-500A Digital Conductivity Sensor",
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
    name: "DISSOLVED OXYGEN SENSOR AAPDO-700",
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
    name: "Residual Chlorine/ Chlorine Dioxide Online Analyzer ",
    category: "Sensors",
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
    name: "ONLINE COD SENSOR AADCOD ",
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
];

export default products;
