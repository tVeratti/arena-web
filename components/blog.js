export default ({ markdown }) => (
  <section __dangerouslySetInnerHTML={markdown} />
);
