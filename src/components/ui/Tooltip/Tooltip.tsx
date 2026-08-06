export const Tooltip = ({
    text,
    children,
  }: {
    text: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className="relative group">
        {children}
  
        {/* Tooltip */}
        <div className="
          absolute -bottom-5 left-1/2 -translate-x-1/2
          px-2 py-1 rounded-md text-xs text-white bg-black/80
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          pointer-events-none
          whitespace-nowrap
          z-50
        ">
          {text}
  
          {/* Flechita */}
          <div
            className="
              absolute left-1/2 top-full -translate-x-1/2
              w-0 h-0
              border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent border-t-black/80
            "
          />
        </div>
      </div>
    );
  };
  