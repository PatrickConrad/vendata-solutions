export const ServiceModal = (props: { text: string}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-lg w-full flex items-center justify-center">
        <p>{props.text}</p>
    </div>
  )
}
