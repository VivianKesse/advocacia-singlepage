
interface ButtonProps {
  title?: string,
  background?: string,
  color?: string,
  size?: string,
}
export default function Button(props: ButtonProps) {
  return (
    <>
      <button style={{ background: props.background, color: props.color, fontSize: props.size }} className="text-sm py-1 px-5 rounded-md md:text-base hover:scale-110 ease-out duration-200">
        {props.title}
      </button>
    </>
  )
}