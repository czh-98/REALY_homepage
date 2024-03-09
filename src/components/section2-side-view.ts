import { boldMinValue, addRank, sortByAll } from "./utils";

let sideViewData = [
  {
    nose_avg: { val: "1.749", bold: false },
    nose_med: { val: "1.704", bold: false },
    nose_std: { val: "0.343", bold: false },
    mouth_avg: { val: "1.411", bold: false },
    mouth_med: { val: "1.359", bold: false },
    mouth_std: { val: "0.395", bold: false },
    forehead_avg: { val: "2.074", bold: false },
    forehead_med: { val: "2.063", bold: false },
    forehead_std: { val: "0.486", bold: false },
    cheek_avg: { val: "1.528", bold: false },
    cheek_med: { val: "1.435", bold: false },
    cheek_std: { val: "0.517", bold: false },
    all_avg: { val: "1.691", bold: false },
    method: "Deep3D",
    link: "https://arxiv.org/pdf/1903.08527.pdf",
  },
  {
    nose_avg: { val: "1.827", bold: false },
    nose_med: { val: "1.783", bold: false },
    nose_std: { val: "0.383", bold: false },
    mouth_avg: { val: "1.409", bold: false },
    mouth_med: { val: "1.353", bold: false },
    mouth_std: { val: "0.418", bold: false },
    forehead_avg: { val: "2.248", bold: false },
    forehead_med: { val: "2.171", bold: false },
    forehead_std: { val: "0.508", bold: false },
    cheek_avg: { val: "1.665", bold: false },
    cheek_med: { val: "1.568", bold: false },
    cheek_std: { val: "0.644", bold: false },
    all_avg: { val: "1.787", bold: false },
    method: "MGCNet",
    link: "https://arxiv.org/pdf/2007.12494.pdf",
  },
  {
    nose_avg: { val: "1.883", bold: false },
    nose_med: { val: "1.865", bold: false },
    nose_std: { val: "0.499", bold: false },
    mouth_avg: { val: "1.642", bold: false },
    mouth_med: { val: "1.611", bold: false },
    mouth_std: { val: "0.501", bold: false },
    forehead_avg: { val: "2.465", bold: false },
    forehead_med: { val: "2.402", bold: false },
    forehead_std: { val: "0.622", bold: false },
    cheek_avg: { val: "1.781", bold: false },
    cheek_med: { val: "1.737", bold: false },
    cheek_std: { val: "0.636", bold: false },
    all_avg: { val: "1.943", bold: false },
    method: "3DDFA-v2",
    link: "https://arxiv.org/pdf/2009.09960.pdf",
  },
  {
    nose_avg: { val: "1.771", bold: false },
    nose_med: { val: "1.695", bold: false },
    nose_std: { val: "0.521", bold: false },
    mouth_avg: { val: "1.560", bold: false },
    mouth_med: { val: "1.542", bold: false },
    mouth_std: { val: "0.462", bold: false },
    forehead_avg: { val: "2.490", bold: false },
    forehead_med: { val: "2.429", bold: false },
    forehead_std: { val: "0.566", bold: false },
    cheek_avg: { val: "2.010", bold: false },
    cheek_med: { val: "1.913", bold: false },
    cheek_std: { val: "0.715", bold: false },
    all_avg: { val: "1.958", bold: false },
    method: "SADRNet",
    link: "https://arxiv.org/pdf/2106.03021.pdf",
  },
  {
    nose_avg: { val: "2.008", bold: false },
    nose_med: { val: "1.977", bold: false },
    nose_std: { val: "0.526", bold: false },
    mouth_avg: { val: "1.725", bold: false },
    mouth_med: { val: "1.700", bold: false },
    mouth_std: { val: "0.533", bold: false },
    forehead_avg: { val: "2.638", bold: false },
    forehead_med: { val: "2.582", bold: false },
    forehead_std: { val: "0.719", bold: false },
    cheek_avg: { val: "1.662", bold: false },
    cheek_med: { val: "1.566", bold: false },
    cheek_std: { val: "0.627", bold: false },
    all_avg: { val: "2.008", bold: false },
    method: "SynergyNet",
    link: "https://arxiv.org/pdf/2110.09772.pdf",
  },
  {
    nose_avg: { val: "1.868", bold: false },
    nose_med: { val: "1.813", bold: false },
    nose_std: { val: "0.510", bold: false },
    mouth_avg: { val: "1.856", bold: false },
    mouth_med: { val: "1.780", bold: false },
    mouth_std: { val: "0.607", bold: false },
    forehead_avg: { val: "2.445", bold: false },
    forehead_med: { val: "2.390", bold: false },
    forehead_std: { val: "0.570", bold: false },
    cheek_avg: { val: "1.960", bold: false },
    cheek_med: { val: "1.815", bold: false },
    cheek_std: { val: "0.731", bold: false },
    all_avg: { val: "2.032", bold: false },
    method: "PRNet",
    link: "https://arxiv.org/pdf/1803.07835.pdf",
  },
  {
    nose_avg: { val: "1.903", bold: false },
    nose_med: { val: "1.700", bold: false },
    nose_std: { val: "1.050", bold: false },
    mouth_avg: { val: "2.472", bold: false },
    mouth_med: { val: "2.348", bold: false },
    mouth_std: { val: "1.079", bold: false },
    forehead_avg: { val: "2.423", bold: false },
    forehead_med: { val: "2.308", bold: false },
    forehead_std: { val: "0.720", bold: false },
    cheek_avg: { val: "1.630", bold: false },
    cheek_med: { val: "1.456", bold: false },
    cheek_std: { val: "1.135", bold: false },
    all_avg: { val: "2.107", bold: false },
    method: "DECA-c",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "1.921", bold: false },
    nose_med: { val: "1.872", bold: false },
    nose_std: { val: "0.451", bold: false },
    mouth_avg: { val: "1.994", bold: false },
    mouth_med: { val: "1.955", bold: false },
    mouth_std: { val: "0.604", bold: false },
    forehead_avg: { val: "3.081", bold: false },
    forehead_med: { val: "2.979", bold: false },
    forehead_std: { val: "0.950", bold: false },
    cheek_avg: { val: "2.027", bold: false },
    cheek_med: { val: "1.929", bold: false },
    cheek_std: { val: "0.710", bold: false },
    all_avg: { val: "2.256", bold: false },
    method: "RingNet",
    link: "https://arxiv.org/pdf/1905.06817.pdf",
  },
  {
    nose_avg: { val: "2.286", bold: false },
    nose_med: { val: "2.065", bold: false },
    nose_std: { val: "1.103", bold: false },
    mouth_avg: { val: "2.684", bold: false },
    mouth_med: { val: "2.572", bold: false },
    mouth_std: { val: "1.041", bold: false },
    forehead_avg: { val: "2.519", bold: false },
    forehead_med: { val: "2.402", bold: false },
    forehead_std: { val: "0.718", bold: false },
    cheek_avg: { val: "1.555", bold: false },
    cheek_med: { val: "1.422", bold: false },
    cheek_std: { val: "0.822", bold: false },
    all_avg: { val: "2.261", bold: false },
    method: "DECA-f",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "2.508", bold: false },
    nose_med: { val: "2.453", bold: false },
    nose_std: { val: "0.491", bold: false },
    mouth_avg: { val: "2.160", bold: false },
    mouth_med: { val: "2.094", bold: false },
    mouth_std: { val: "0.448", bold: false },
    forehead_avg: { val: "3.393", bold: false },
    forehead_med: { val: "3.226", bold: false },
    forehead_std: { val: "1.076", bold: false },
    cheek_avg: { val: "1.842", bold: false },
    cheek_med: { val: "1.774", bold: false },
    cheek_std: { val: "0.609", bold: false },
    all_avg: { val: "2.476", bold: false },
    method: "ExpNet",
    link: "https://arxiv.org/pdf/1802.00542.pdf",
  },
  {
    nose_avg: { val: "1.525", bold: false },
    nose_med: { val: "1.492", bold: false },
    nose_std: { val: "0.322", bold: false },
    mouth_avg: { val: "3.567", bold: false },
    mouth_med: { val: "3.583", bold: false },
    mouth_std: { val: "1.212", bold: false },
    forehead_avg: { val: "2.379", bold: false },
    forehead_med: { val: "2.278", bold: false },
    forehead_std: { val: "0.675", bold: false },
    cheek_avg: { val: "1.109", bold: false },
    cheek_med: { val: "1.053", bold: false },
    cheek_std: { val: "0.325", bold: false },
    all_avg: { val: "2.145", bold: false },
    method: "MICA",
    link: "https://arxiv.org/pdf/2204.06607.pdf",
  },
  {
    nose_avg: { val: "1.867", bold: false },
    nose_med: { val: "1.548", bold: false },
    nose_std: { val: "0.554", bold: false },
    mouth_avg: { val: "2.636", bold: false },
    mouth_med: { val: "1.738", bold: false },
    mouth_std: { val: "1.284", bold: false },
    forehead_avg: { val: "2.448", bold: false },
    forehead_med: { val: "2.369", bold: false },
    forehead_std: { val: "0.708", bold: false },
    cheek_avg: { val: "1.548", bold: false },
    cheek_med: { val: "1.424", bold: false },
    cheek_std: { val: "0.590", bold: false },
    all_avg: { val: "2.125", bold: false },
    method: "EMOCA-c",
    link: "https://arxiv.org/pdf/2204.11312.pdf",
  },
  {
    nose_avg: { val: "2.455", bold: false },
    nose_med: { val: "2.389", bold: false },
    nose_std: { val: "0.636", bold: false },
    mouth_avg: { val: "2.948", bold: false },
    mouth_med: { val: "2.697", bold: false },
    mouth_std: { val: "1.292", bold: false },
    forehead_avg: { val: "2.606", bold: false },
    forehead_med: { val: "2.517", bold: false },
    forehead_std: { val: "0.686", bold: false },
    cheek_avg: { val: "1.599", bold: false },
    cheek_med: { val: "1.480", bold: false },
    cheek_std: { val: "0.563", bold: false },
    all_avg: { val: "2.402", bold: false },
    method: "EMOCA-f",
    link: "https://arxiv.org/pdf/2204.11312.pdf",
  },
  {
    nose_avg: { val: "1.642", bold: false },
    nose_med: { val: "1.601", bold: false },
    nose_std: { val: "0.310", bold: false },
    mouth_avg: { val: "1.285", bold: false },
    mouth_med: { val: "1.200", bold: false },
    mouth_std: { val: "0.528", bold: false },
    forehead_avg: { val: "1.906", bold: false },
    forehead_med: { val: "1.882", bold: false },
    forehead_std: { val: "0.479", bold: false },
    cheek_avg: { val: "1.038", bold: false },
    cheek_med: { val: "0.978", bold: false },
    cheek_std: { val: "0.322", bold: false },
    all_avg: { val: "1.468", bold: false },
    method: "HRN",
    link: "https://arxiv.org/pdf/2302.14434.pdf",
  },
  {
    nose_avg: { val: "1.576", bold: false },
    nose_med: { val: "1.556", bold: false },
    nose_std: { val: "0.338", bold: false },
    mouth_avg: { val: "2.218", bold: false },
    mouth_med: { val: "1.995", bold: false },
    mouth_std: { val: "0.952", bold: false },
    forehead_avg: { val: "2.142", bold: false },
    forehead_med: { val: "2.093", bold: false },
    forehead_std: { val: "0.554", bold: false },
    cheek_avg: { val: "1.112", bold: false },
    cheek_med: { val: "1.068", bold: false },
    cheek_std: { val: "0.278", bold: false },
    all_avg: { val: "1.762", bold: false },
    method: "AlbedoGAN",
    link: "https://arxiv.org/pdf/2304.12483.pdf",
  },
  {
    nose_avg: { val: "2.559", bold: false },
    nose_med: { val: "2.467", bold: false },
    nose_std: { val: "0.608", bold: false },
    mouth_avg: { val: "2.255", bold: false },
    mouth_med: { val: "2.222", bold: false },
    mouth_std: { val: "0.518", bold: false },
    forehead_avg: { val: "2.659", bold: false },
    forehead_med: { val: "2.553", bold: false },
    forehead_std: { val: "0.664", bold: false },
    cheek_avg: { val: "2.309", bold: false },
    cheek_med: { val: "2.259", bold: false },
    cheek_std: { val: "0.581", bold: false },
    all_avg: { val: "2.446", bold: false },
    method: "FS-Opt-c",
    link: "https://arxiv.org/pdf/2003.13989.pdf",
  }, 
  {
    nose_avg: { val: "2.514", bold: false },
    nose_med: { val: "2.433", bold: false },
    nose_std: { val: "0.596", bold: false },
    mouth_avg: { val: "2.232", bold: false },
    mouth_med: { val: "2.217", bold: false },
    mouth_std: { val: "0.514", bold: false },
    forehead_avg: { val: "2.647", bold: false },
    forehead_med: { val: "2.539", bold: false },
    forehead_std: { val: "0.664", bold: false },
    cheek_avg: { val: "2.308", bold: false },
    cheek_med: { val: "2.257", bold: false },
    cheek_std: { val: "0.580", bold: false },
    all_avg: { val: "2.425", bold: false },
    method: "FS-Opt-f",
    link: "https://arxiv.org/pdf/2003.13989.pdf",
  }, 
  {
    nose_avg: { val: "0.992", bold: false },
    nose_med: { val: "0.935", bold: false },
    nose_std: { val: "0.246", bold: false },
    mouth_avg: { val: "1.505", bold: false },
    mouth_med: { val: "1.449", bold: false },
    mouth_std: { val: "0.454", bold: false },
    forehead_avg: { val: "1.427", bold: false },
    forehead_med: { val: "1.369", bold: false },
    forehead_std: { val: "0.400", bold: false },
    cheek_avg: { val: "1.439", bold: false },
    cheek_med: { val: "1.394", bold: false },
    cheek_std: { val: "0.429", bold: false },
    all_avg: { val: "1.341", bold: false },
    method: "HiFace-c",
    link: "https://arxiv.org/pdf/2303.11225.pdf",
  },
  {
    nose_avg: { val: "0.985", bold: false },
    nose_med: { val: "0.945", bold: false },
    nose_std: { val: "0.237", bold: false },
    mouth_avg: { val: "1.489", bold: false },
    mouth_med: { val: "1.438", bold: false },
    mouth_std: { val: "0.436", bold: false },
    forehead_avg: { val: "1.399", bold: false },
    forehead_med: { val: "1.332", bold: false },
    forehead_std: { val: "0.388", bold: false },
    cheek_avg: { val: "1.360", bold: false },
    cheek_med: { val: "1.312", bold: false },
    cheek_std: { val: "0.395", bold: false },
    all_avg: { val: "1.308", bold: false },
    method: "HiFace-f",
    link: "https://arxiv.org/pdf/2303.11225.pdf",
  },
  {
    nose_avg: { val: "1.685", bold: false },
    nose_med: { val: "1.629", bold: false },
    nose_std: { val: "0.475", bold: false },
    mouth_avg: { val: "1.820", bold: false },
    mouth_med: { val: "1.757", bold: false },
    mouth_std: { val: "0.557", bold: false },
    forehead_avg: { val: "2.454", bold: false },
    forehead_med: { val: "2.426", bold: false },
    forehead_std: { val: "0.608", bold: false },
    cheek_avg: { val: "1.469", bold: false },
    cheek_med: { val: "1.378", bold: false },
    cheek_std: { val: "0.495", bold: false },
    all_avg: { val: "1.857", bold: false },
    method: "PSL",
    link: "https://arxiv.org/pdf/2310.19580",
  },
];

sideViewData = sortByAll(sideViewData);
addRank(sideViewData);
boldMinValue(sideViewData);

export { sideViewData };
