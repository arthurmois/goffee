import { Button, Image, Page } from "@geist-ui/react";
import { Text } from "@geist-ui/react";

export default function Home() {

  return (
    <Page>
      <Page.Header>
        <Text h1>Goffee</Text>
        <Text h5 style={{ color: 'grey' }}>Treat others to coffee, virtually!</Text>
      </Page.Header>
      <Page.Content>
        <Text h5 height={7}>
          Goffee provides an easy way for you to send coffee deliveries to your peers and employees.<br/>
          With a curated link and a code word formed by you, those you wish to send coffee to can customize their order and<br/>
          simply provide their address with instructions and receive a coffee, on the house! Well... on your house ;)
        </Text>
        <Image height='450px' src="https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hhcmluZyUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
        <br />
        <Button shadow type="secondary" onClick={() => { window.location.href = 'https://form.jotform.com/213596847839072' }}>Order Now</Button>
      </Page.Content>
      <Page.Footer>
        <Text h6>Have Suggestions? Contact us at email.com</Text>
      </Page.Footer>
    </Page>
  )
}