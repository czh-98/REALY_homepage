const frontalViewData = [
  {
    nose_avg: { val: "1.719", bold: false },
    nose_med: { val: "1.683", bold: false },
    nose_std: { val: "0.354", bold: true },
    mouth_avg: { val: "1.368", bold: true },
    mouth_med: { val: "1.301", bold: true },
    mouth_std: { val: "0.439", bold: false },
    forehead_avg: { val: "2.015", bold: true },
    forehead_med: { val: "2.007", bold: true },
    forehead_std: { val: "0.449", bold: true },
    cheek_avg: { val: "1.528", bold: false },
    cheek_med: { val: "1.442", bold: false },
    cheek_std: { val: "0.501", bold: false },
    all_avg: { val: "1.657", bold: true },
    method: "Deep3D",
    link: "https://arxiv.org/pdf/1903.08527.pdf",
  },
  {
    nose_avg: { val: "1.771", bold: false },
    nose_med: { val: "1.741", bold: false },
    nose_std: { val: "0.380", bold: false },
    mouth_avg: { val: "1.417", bold: false },
    mouth_med: { val: "1.355", bold: false },
    mouth_std: { val: "0.409", bold: false },
    forehead_avg: { val: "2.268", bold: false },
    forehead_med: { val: "2.215", bold: false },
    forehead_std: { val: "0.503", bold: false },
    cheek_avg: { val: "1.639", bold: false },
    cheek_med: { val: "1.494", bold: false },
    cheek_std: { val: "0.650", bold: false },
    all_avg: { val: "1.774", bold: false },
    method: "MGCNet",
    link: "https://arxiv.org/pdf/2007.12494.pdf",
  },
  {
    nose_avg: { val: "1.928", bold: false },
    nose_med: { val: "1.881", bold: false },
    nose_std: { val: "0.490", bold: false },
    mouth_avg: { val: "1.812", bold: false },
    mouth_med: { val: "1.769", bold: false },
    mouth_std: { val: "0.544", bold: false },
    forehead_avg: { val: "2.402", bold: false },
    forehead_med: { val: "3.339", bold: false },
    forehead_std: { val: "0.545", bold: false },
    cheek_avg: { val: "1.329", bold: true },
    cheek_med: { val: "1.234", bold: true },
    cheek_std: { val: "0.504", bold: false },
    all_avg: { val: "1.868", bold: false },
    method: "GANFit",
    link: "https://arxiv.org/pdf/1902.05978.pdf",
  },
  {
    nose_avg: { val: "1.791", bold: false },
    nose_med: { val: "1.724", bold: false },
    nose_std: { val: "0.542", bold: false },
    mouth_avg: { val: "1.591", bold: false },
    mouth_med: { val: "1.551", bold: false },
    mouth_std: { val: "0.488", bold: false },
    forehead_avg: { val: "2.413", bold: false },
    forehead_med: { val: "2.351", bold: false },
    forehead_std: { val: "0.537", bold: false },
    cheek_avg: { val: "1.856", bold: false },
    cheek_med: { val: "1.737", bold: false },
    cheek_std: { val: "0.701", bold: false },
    all_avg: { val: "1.913", bold: false },
    method: "SADRNet",
    link: "https://arxiv.org/pdf/2106.03021.pdf",
  },
  {
    nose_avg: { val: "1.903", bold: false },
    nose_med: { val: "1.857", bold: false },
    nose_std: { val: "0.517", bold: false },
    mouth_avg: { val: "1.597", bold: false },
    mouth_med: { val: "1.529", bold: false },
    mouth_std: { val: "0.478", bold: false },
    forehead_avg: { val: "2.447", bold: false },
    forehead_med: { val: "3.356", bold: false },
    forehead_std: { val: "0.647", bold: false },
    cheek_avg: { val: "1.757", bold: false },
    cheek_med: { val: "1.683", bold: false },
    cheek_std: { val: "0.642", bold: false },
    all_avg: { val: "1.926", bold: false },
    method: "3DDFA-v2",
    link: "https://arxiv.org/pdf/2009.09960.pdf",
  },
  {
    nose_avg: { val: "1.697", bold: true },
    nose_med: { val: "1.654", bold: true },
    nose_std: { val: "0.355", bold: false },
    mouth_avg: { val: "2.516", bold: false },
    mouth_med: { val: "2.465", bold: false },
    mouth_std: { val: "0.839", bold: false },
    forehead_avg: { val: "2.394", bold: false },
    forehead_med: { val: "2.256", bold: false },
    forehead_std: { val: "0.576", bold: false },
    cheek_avg: { val: "1.479", bold: false },
    cheek_med: { val: "1.400", bold: false },
    cheek_std: { val: "0.535", bold: false },
    all_avg: { val: "2.010", bold: false },
    method: "DECA-c",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "1.923", bold: false },
    nose_med: { val: "1.811", bold: false },
    nose_std: { val: "0.518", bold: false },
    mouth_avg: { val: "1.838", bold: false },
    mouth_med: { val: "1.699", bold: false },
    mouth_std: { val: "0.637", bold: false },
    forehead_avg: { val: "2.429", bold: false },
    forehead_med: { val: "2.329", bold: false },
    forehead_std: { val: "0.588", bold: false },
    cheek_avg: { val: "1.863", bold: false },
    cheek_med: { val: "1.715", bold: false },
    cheek_std: { val: "0.698", bold: false },
    all_avg: { val: "2.013", bold: false },
    method: "PRNet",
    link: "https://arxiv.org/pdf/1803.07835.pdf",
  },
  {
    nose_avg: { val: "2.779", bold: false },
    nose_med: { val: "2.717", bold: false },
    nose_std: { val: "0.835", bold: false },
    mouth_avg: { val: "1.448", bold: false },
    mouth_med: { val: "1.438", bold: false },
    mouth_std: { val: "0.406", bold: true },
    forehead_avg: { val: "2.384", bold: false },
    forehead_med: { val: "2.302", bold: false },
    forehead_std: { val: "0.578", bold: false },
    cheek_avg: { val: "1.456", bold: false },
    cheek_med: { val: "1.321", bold: false },
    cheek_std: { val: "0.485", bold: true },
    all_avg: { val: "2.017", bold: false },
    method: "CEST",
    link: "https://arxiv.org/pdf/2110.04800.pdf",
  },
  {
    nose_avg: { val: "2.026", bold: false },
    nose_med: { val: "2.014", bold: false },
    nose_std: { val: "0.532", bold: false },
    mouth_avg: { val: "1.731", bold: false },
    mouth_med: { val: "1.724", bold: false },
    mouth_std: { val: "0.502", bold: false },
    forehead_avg: { val: "2.679", bold: false },
    forehead_med: { val: "2.615", bold: false },
    forehead_std: { val: "0.741", bold: false },
    cheek_avg: { val: "1.647", bold: false },
    cheek_med: { val: "1.550", bold: false },
    cheek_std: { val: "0.622", bold: false },
    all_avg: { val: "2.021", bold: false },
    method: "SynergyNet",
    link: "https://arxiv.org/pdf/2110.09772.pdf",
  },
  {
    nose_avg: { val: "2.138", bold: false },
    nose_med: { val: "2.137", bold: false },
    nose_std: { val: "0.461", bold: false },
    mouth_avg: { val: "2.802", bold: false },
    mouth_med: { val: "2.699", bold: false },
    mouth_std: { val: "0.868", bold: false },
    forehead_avg: { val: "2.457", bold: false },
    forehead_med: { val: "2.341", bold: false },
    forehead_std: { val: "0.559", bold: false },
    cheek_avg: { val: "1.443", bold: false },
    cheek_med: { val: "1.353", bold: false },
    cheek_std: { val: "0.498", bold: false },
    all_avg: { val: "2.210", bold: false },
    method: "DECA-f",
    link: "https://arxiv.org/pdf/2012.04012.pdf",
  },
  {
    nose_avg: { val: "1.934", bold: false },
    nose_med: { val: "1.907", bold: false },
    nose_std: { val: "0.458", bold: false },
    mouth_avg: { val: "2.074", bold: false },
    mouth_med: { val: "1.991", bold: false },
    mouth_std: { val: "0.616", bold: false },
    forehead_avg: { val: "2.995", bold: false },
    forehead_med: { val: "2.852", bold: false },
    forehead_std: { val: "0.908", bold: false },
    cheek_avg: { val: "2.028", bold: false },
    cheek_med: { val: "1.937", bold: false },
    cheek_std: { val: "0.720", bold: false },
    all_avg: { val: "2.258", bold: false },
    method: "RingNet",
    link: "https://arxiv.org/pdf/1905.06817.pdf",
  },
  {
    nose_avg: { val: "2.509", bold: false },
    nose_med: { val: "2.463", bold: false },
    nose_std: { val: "0.486", bold: false },
    mouth_avg: { val: "1.912", bold: false },
    mouth_med: { val: "1.850", bold: false },
    mouth_std: { val: "0.450", bold: false },
    forehead_avg: { val: "3.084", bold: false },
    forehead_med: { val: "2.879", bold: false },
    forehead_std: { val: "1.005", bold: false },
    cheek_avg: { val: "1.717", bold: false },
    cheek_med: { val: "1.642", bold: false },
    cheek_std: { val: "0.590", bold: false },
    all_avg: { val: "2.306", bold: false },
    method: "ExpNet",
    link: "https://arxiv.org/pdf/1802.00542.pdf",
  },
  {
    nose_avg: { val: "2.936", bold: false },
    nose_med: { val: "2.857", bold: false },
    nose_std: { val: "0.810", bold: false },
    mouth_avg: { val: "2.375", bold: false },
    mouth_med: { val: "2.390", bold: false },
    mouth_std: { val: "0.599", bold: false },
    forehead_avg: { val: "4.582", bold: false },
    forehead_med: { val: "4.452", bold: false },
    forehead_std: { val: "1.488", bold: false },
    cheek_avg: { val: "1.918", bold: false },
    cheek_med: { val: "1.717", bold: false },
    cheek_std: { val: "0.801", bold: false },
    all_avg: { val: "2.953", bold: false },
    method: "N-3DMM",
    link: "https://arxiv.org/pdf/1804.03786.pdf",
  },
];

frontalViewData.forEach((val, index) => {
  Object.assign(val, { rank: index + 1 });
});

export { frontalViewData };
