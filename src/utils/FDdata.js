
export const idToBackgroundColor = {
  1: "bg-purple-100",
  2: "bg-blue-100",
  3: "bg-zinc-100",
  4: "bg-red-100",
  
};
export const idToBbBoxColor = {
  1: "bg-purple-300",
  2: "bg-blue-300",
  3: "bg-zinc-300",
  4: "bg-red-300",
  
};
export const idToBbButtonColor = {
  1: "bg-purple-500",
  2: "bg-blue-500",
  3: "bg-zinc-500",
  4: "bg-red-500",

};

const FDdata = {
  data: [
    {
      id: "1",
      name: "Utkarsh Small Finance Bank",
      Interest_Rate: "Higehest Interest Rate",
      KYC: "RSI Insured",
      Interest_Upto: "9.10% p.a",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMTpfJ39WIgRYI2HU5ni-rk6tKUrEM-1bLM-r0lYAcg&s",
      backgroundColor: idToBackgroundColor["1"] || "bg-gray-300", 
      bgButton: idToBbButtonColor["1"] || "bg-gray-300",
      bgBox: idToBbBoxColor["1"] || "bg-gray-300",
    },
    {
      id: "2",
      name: "Bajaj Finserv",
      Interest_Rate: "Crisil AAA Rated",
      KYC: "No Video KYC required",
      Interest_Upto: "8.80% p.a",
      logo: "https://companieslogo.com/img/orig/BAJAJFINSV.NS-69a58fe4.png?t=1596838048",
      backgroundColor: idToBackgroundColor["2"] || "bg-gray-300",
      bgButton: idToBbButtonColor["2"] || "bg-gray-300",
      bgBox: idToBbBoxColor["2"] || "bg-gray-300",
    },
    {
      id: "3",
      name: "Shriram Finance",
      Interest_Rate: "Crisil AAA Rated",
      KYC: "No Video KYC required",
      Interest_Upto: "8.80% p.a",
      logo: "https://companieslogo.com/img/orig/SHRIRAMFIN.NS-b563e9ad.png?t=1612566643",
      backgroundColor: idToBackgroundColor["3"] || "bg-gray-300",
      bgButton: idToBbButtonColor["3"] || "bg-gray-300",
      bgBox: idToBbBoxColor["3"] || "bg-gray-300",
    },
    {
      id: "4",
      name: "Mahindra Finance",
      Interest_Rate: "Crisil AAA Rated",
      KYC: "No Video KYC required",
      Interest_Upto: "8.80% p.a",
      logo: "https://hblapis.cmots.com/complogodata/IImagesNew/MMFinServ_57694942710_16795.png",
      backgroundColor: idToBackgroundColor["4"] || "bg-gray-300",
      bgButton: idToBbButtonColor["4"] || "bg-gray-300",
      bgBox: idToBbBoxColor["4"] || "bg-gray-300",
    },
  ],
};

export default FDdata;
