import MarkdownIt from 'markdown-it';
import container from 'markdown-it-container';

const md = new MarkdownIt();

md.use(container, 'note', {
  validate: function(params) {
    return params.trim() === 'note';
  },
  render: function(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="note"><strong>Note:</strong>\n';
    } else {
      // closing tag
      return '</div>\n';
    }
  }
});


export const parseMarkdown = (content) => {
  return md.render(content);
};