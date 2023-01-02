interface DataItem {
  val: string;
  bold: boolean;
}

interface Data {
  nose_avg: DataItem;
  nose_med: DataItem;
  nose_std: DataItem;
  mouth_avg: DataItem;
  mouth_med: DataItem;
  mouth_std: DataItem;
  forehead_avg: DataItem;
  forehead_med: DataItem;
  forehead_std: DataItem;
  cheek_avg: DataItem;
  cheek_med: DataItem;
  cheek_std: DataItem;
  all_avg: DataItem;
  method: string;
  link: string;
  [key: string]: any;
}
