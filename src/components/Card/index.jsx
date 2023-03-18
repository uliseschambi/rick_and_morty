import { Span, Img, H2, Button } from './style';
import { Link } from 'react-router-dom';

export default function Card({ id, name, species, gender, image, onClose }) {
  // const [id, setId] = useState(key);

  return (
    <Span>
      <Button onClick={() => onClose(id)}>X</Button>
      <Link to={`/detail/${id}`}>
        <H2>{name}</H2>
      </Link>
      <H2>{species}</H2>
      <H2>{gender}</H2>
      <Img src={image} alt="Here should be the img of a character card" />
    </Span>
  );
}
