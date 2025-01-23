interface StatisticProps {
  value: string;
  text: string;
}
export default function Statistic(props: StatisticProps) {
  return (
    <div className="w-28 md:w-52">
      <h3 className="font-bold text-2xl text-mainYellow">{props.value}</h3>
      <div className="bg-mainWhite h-0.5 w-5"></div>
      <p className="text-mainWhite text-xs md:text-base">{props.text}</p>
    </div>
  )
}