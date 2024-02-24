interface ContainerProps {
  children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
        relative
        max-w-[1520px]
        xl:px-20
        md:px-10
        sm:px-2
        px-2
        mx-auto
      "
    >
      {children}
    </div>
   );
}
 
export default Container;