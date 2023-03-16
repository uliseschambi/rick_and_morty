import Card from '../Card/Card';

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <>
      {/* No pasar el obj completo. key no es una prop. */}
      {characters.map(({ id, name, species, gender, image }, index) => (
        <Card key={index} id={id} name={name} species={species} gender={gender} image={image} onClose={onClose} />
      ))}
    </>
  );
}
