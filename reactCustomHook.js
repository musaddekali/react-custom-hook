function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
  
    useEffect(() => {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
  
      handler()
      window.addEventListener('resize', handler)
  
      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handler)
      }
    }, [])
  
    return windowSize
  }

  // call it as const "[width, height] = useWindowSize();"