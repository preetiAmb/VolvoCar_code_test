import { Block, Flex, Text, Logo, Link } from "vcc-ui";

const Header = () => {
    return (
      <header>
       <Flex extend={{ padding: 16, justifyContent: "center" }}>
        <Link href="/"><Logo type="spreadmark" alt="Volvo Cars" height={16} /></Link>         
        </Flex>
      </header>
    )
  }
 
  export default Header;