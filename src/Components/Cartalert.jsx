import { Button, useToast } from "@chakra-ui/react"
import axios from "axios"

const ToastExample = ({ title,el }) => {
  const toast = useToast()

  const postData = () => {
    axios.post("https://nykaa-server-wg8d.onrender.com/nykaa/cart",el).then((res)=>{
      console.log(res.data);
    }).catch((err) => {
console.log(err.message);
    })
  }

  return (
    <Button
      margin={1}
      bgColor={"#e80071"}
      colorScheme={"pink"}
      variant={"solid"}
      padding={2}
      fontSize={'xs'}
      onClick={() => {
        postData();
        toast({
          title: "Added to Cart!",
          description: "Go to Cart for Checkout",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }}
    >
      {title}
    </Button>
  )
}

export default ToastExample
