import { Button, Page } from "@geist-ui/react";
import { Text } from "@geist-ui/react";

export default function Home() {

  return (
    <Page>
      <Page.Header>
        <Text h1>Goffee</Text>
        <Text h5 style={{color:'grey'}}>Bulk order coffee delivery</Text>
      </Page.Header>
      <Page.Content>
      <Button shadow type="secondary" onClick={()=>{window.location.href='https://form.jotform.com/213596847839072'}}>Order Now</Button>
      </Page.Content>
      <Page.Footer>
        <Text h6>Have Suggestions? Contact us at email.com</Text>
      </Page.Footer>
    </Page>
  )
}