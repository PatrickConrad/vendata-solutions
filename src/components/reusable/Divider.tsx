
type DividerProps = {
    className?: string,
}
export const Divider = (props: DividerProps) => {
  return (
    <div className={`flex justify-center`}>
        <div className={`rounded-full ${props.className??''}`} />
    </div>
  )
}
