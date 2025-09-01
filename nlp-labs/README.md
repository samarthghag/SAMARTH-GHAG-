# NLP Labs 1-7: Comprehensive Natural Language Processing Pipeline

This directory contains a complete implementation of 7 Natural Language Processing labs covering fundamental NLP techniques and concepts.

## Overview

The `nlp_labs_1_to_7.py` file provides a comprehensive NLP pipeline that demonstrates various text processing techniques from basic tokenization to advanced discourse analysis.

## Labs Covered

### LAB 1: Tokenization
- **Purpose**: Break text into individual tokens (words, punctuation)
- **Implementation**: Uses NLTK's `word_tokenize()` function
- **Example**: "Hello world!" → ["Hello", "world", "!"]

### LAB 2: Stopwords & POS Tagging
- **Purpose**: Remove common words and identify grammatical roles
- **Features**: 
  - Stopword removal using NLTK's English stopwords corpus
  - Part-of-speech tagging to identify nouns, verbs, adjectives, etc.
- **Example**: "The cat runs" → POS: [('The', 'DT'), ('cat', 'NN'), ('runs', 'VBZ')]

### LAB 3: Non-English Language Demo
- **Purpose**: Demonstrate tokenization capabilities with other languages
- **Languages**: Hindi and Kannada examples
- **Showcases**: Unicode text processing capabilities

### LAB 4: WordNet Integration
- **Purpose**: Extract semantic relationships between words
- **Features**:
  - Synonym extraction using WordNet
  - Antonym identification
  - Semantic similarity analysis
- **Example**: "good" → synonyms: {good, well, beneficial, ...}, antonyms: {bad, evil, ...}

### LAB 5: N-gram Analysis
- **Purpose**: Analyze word patterns and frequencies
- **Features**:
  - Generate unigrams, bigrams, and trigrams
  - Frequency analysis using Counter
  - Most common n-gram identification
- **Applications**: Language modeling, text prediction

### LAB 6: Discourse Analysis
- **Purpose**: Advanced text understanding and relationship analysis
- **Features**:
  - Simple coreference resolution (pronoun → noun mapping)
  - Subject-Verb-Object (SVO) triplet extraction
  - Word Sense Disambiguation using Lesk algorithm
- **Technologies**: SpaCy for advanced linguistic processing

### LAB 7: Lemmatization & Text Generation
- **Purpose**: Normalize words to their base forms and generate text variations
- **Features**:
  - Lemmatization using SpaCy
  - Text style transformation (formal, conversational, simplified)
- **Example**: "running" → lemma: "run"

## Dependencies

### Required Libraries
```bash
pip install nltk spacy
python -m spacy download en_core_web_sm
```

### NLTK Downloads (handled automatically in code)
- punkt (tokenization)
- stopwords (English stopwords)
- wordnet (semantic lexical database)
- averaged_perceptron_tagger (POS tagging)
- omw-1.4 (Open Multilingual Wordnet)

## Usage

### Run the Complete Pipeline
```bash
python nlp_labs_1_to_7.py
```

### Use Individual Functions
```python
from nlp_labs_1_to_7 import tokenize, synonyms_antonyms, discourse_analysis

# Tokenize text
tokens = tokenize("Your text here")

# Get synonyms and antonyms
syns, ants = synonyms_antonyms("happy")

# Perform discourse analysis
discourse_analysis("The cat sat on the mat. It was comfortable.")
```

## Sample Output

The pipeline processes the example text: "The cat was running and it jumped on the mat near the bank."

**LAB 1 Output**: Tokens extracted
**LAB 2 Output**: Stopwords removed, POS tags assigned
**LAB 3 Output**: Multilingual tokenization examples
**LAB 4 Output**: Synonyms and antonyms for "good"
**LAB 5 Output**: Most frequent n-grams
**LAB 6 Output**: Coreference chains, SVO triplets, word senses
**LAB 7 Output**: Lemmatized forms and text variations

## Educational Value

This implementation serves as a comprehensive introduction to:
- **Preprocessing**: Tokenization, stopword removal
- **Linguistic Analysis**: POS tagging, lemmatization
- **Semantic Processing**: WordNet, word sense disambiguation
- **Pattern Recognition**: N-grams, frequency analysis
- **Advanced NLP**: Coreference resolution, discourse analysis

## Technical Architecture

- **NLTK**: Core NLP operations and linguistic resources
- **SpaCy**: Advanced linguistic processing and named entity recognition
- **Counter**: Frequency analysis and statistical operations
- **Modular Design**: Each lab as separate, reusable functions
- **Universal Pipeline**: Integrated workflow demonstrating all techniques

## Future Extensions

Potential enhancements:
- Named Entity Recognition (NER)
- Sentiment Analysis
- Topic Modeling
- Machine Translation
- Text Summarization
- Advanced Coreference Resolution

This implementation provides a solid foundation for understanding and applying Natural Language Processing techniques in real-world applications.