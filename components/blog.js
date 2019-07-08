export default ({ markdown }) => {
  const { html, attributes } = markdown;
  const { title, date, thumbnail } = attributes;

  return (
    <article>
      <h1>{title}</h1>
      <h2>{new Date(date).toLocaleDateString()}</h2>
      <img src={`/static${thumbnail}`} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};
