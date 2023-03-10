import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="App">
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={title} title={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Link to={`${title}`}>
              <Heading size="md">{title}</Heading>
            </Link>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
