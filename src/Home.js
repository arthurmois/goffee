import { Button, Image, Page } from "@geist-ui/react";
import { Text } from "@geist-ui/react";

import useMediaQuery from "./useMediaQuery";


export default function Home() {
  let isPageSmall = useMediaQuery("(max-width: 600px)");
  const pageWidth = isPageSmall ? "100%" : "80%";
  return (
    <Page width={pageWidth}>
      <Page.Header>
        <Text h1>Goffee</Text>
        <Text h5 style={{ color: 'grey' }}>Treat others to coffee, virtually!</Text>
      </Page.Header>
      <Page.Content>
        <Button shadow type="secondary" onClick={() => { window.location.href = 'https://form.jotform.com/213596847839072' }}>Order Now</Button>
        <br/> <br/>
        <Text h5 height={7}>
          Goffee provides an easy way for you to send coffee deliveries to your peers and employees.<br/><br/>
          With a curated link and a code word formed by you, those you wish to send coffee to can customize their order receive a coffee, on the house! Well... on your house ;)
        </Text>
        <Image height='450px' src="https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hhcmluZyUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      </Page.Content>
      <br/>
      <Page.Footer>
        <Text h6>Have Suggestions? Contact us at email.com</Text>
      </Page.Footer>
    </Page>
  )
}