import characters from './public/characters.json' with { type: 'json' };

export class ChatRequestError extends Error {}

export function handleBodyError(error, req, res, next) {
  if (error.type === 'entity.parse.failed') {
    res.status(400).json({ message: 'Send a valid JSON object.' });
  } else if (error.type === 'entity.too.large') {
    res.status(413).json({ message: 'The request is too large.' });
  } else {
    next(error);
  }
}

export function getChatRequest(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new ChatRequestError('Send a message and a character name.');
  }

  const { message, character } = body;
  if (typeof message !== 'string' || !message.trim()) {
    throw new ChatRequestError('The message must be a non-empty string.');
  }

  if (!character || typeof character !== 'object' || Array.isArray(character) ||
      typeof character.name !== 'string') {
    throw new ChatRequestError('Send a character name.');
  }

  if (Object.keys(character).some(key => key !== 'name')) {
    throw new ChatRequestError('Send only the character name, not its description.');
  }

  const selectedCharacter = characters.find(item => item.name === character.name);
  if (!selectedCharacter) {
    throw new ChatRequestError('The character name is not valid.');
  }

  return { prompt: message, systemMessage: selectedCharacter.description };
}
