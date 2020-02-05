const [menuIn, setMenuIn] = useSpring(() => ({
  left: "-333px"
}));

useEffect(() => {
  setTimeout(() => setMenuIn({ left: "0px" }), 2000);
});

return (
  <animated.div
    className="menu"
    css={{
      position: "fixed",
      width: "33vw",
      height: "100vw",
      backgroundColor: "magenta"
    }}
    style={{
      // ^^^ this is emotions's CSS prop, if you replace this with style, then this demo works again
      marginLeft: menuIn.left
    }}
  />
);
};
