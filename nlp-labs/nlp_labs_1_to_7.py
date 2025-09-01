import nltk, spacy, string
from nltk.corpus import stopwords, wordnet as wn
from nltk.tokenize import word_tokenize
from nltk import pos_tag
from nltk.util import ngrams
from nltk.wsd import lesk
from collections import Counter

# --- Setup (run once) ---
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('averaged_perceptron_tagger')
nltk.download('omw-1.4')
nlp = spacy.load("en_core_web_sm")

# -------------------------------
# LAB 1: Tokenization
# -------------------------------
def tokenize(text):
    tokens = word_tokenize(text)
    return tokens

# -------------------------------
# LAB 2: Stopwords + POS tagging
# -------------------------------
def stopwords_pos(tokens):
    sw = set(stopwords.words('english'))
    no_stop = [w for w in tokens if w.lower() not in sw]
    pos = pos_tag(tokens)
    return no_stop, pos

# -------------------------------
# LAB 3: Non-English Demo
# -------------------------------
def non_english_demo():
    hindi = "मैं बाजार जा रहा हूँ।"
    kannada = "ನಾನು ಶಾಲೆಗೆ ಹೋಗುತ್ತೇನೆ."
    print("\nHindi Tokens:", word_tokenize(hindi))
    print("Kannada Tokens:", word_tokenize(kannada))

# -------------------------------
# LAB 4: WordNet (Synonyms & Antonyms)
# -------------------------------
def synonyms_antonyms(word):
    syns, ants = set(), set()
    for syn in wn.synsets(word):
        for l in syn.lemmas():
            syns.add(l.name())
            if l.antonyms():
                ants.add(l.antonyms()[0].name())
    return syns, ants

# -------------------------------
# LAB 5: N-grams (with frequency)
# -------------------------------
def ngram_analysis(tokens):
    result = {}
    for n in [1, 2, 3]:
        grams = list(ngrams(tokens, n))
        freq = Counter(grams)
        result[f"{n}-grams"] = freq.most_common(5)
    return result

# -------------------------------
# LAB 6: Coreference, Discourse, WSD
# -------------------------------
def discourse_analysis(text):
    doc = nlp(text)
    print("\nCoreference (simple pronoun mapping):")
    last_noun = None
    for token in doc:
        if token.pos_ in ["NOUN", "PROPN"]:
            last_noun = token.text
        elif token.pos_ == "PRON" and last_noun:
            print(f"{token.text} → {last_noun}")

    print("\nSVO Triplets:")
    for sent in doc.sents:
        subj, verb, obj = None, None, None
        for tok in sent:
            if "subj" in tok.dep_:
                subj = tok.text
            if tok.pos_ == "VERB":
                verb = tok.text
            if "obj" in tok.dep_:
                obj = tok.text
        if subj and verb:
            print((subj, verb, obj))

    print("\nWord Sense Disambiguation:")
    for token in doc:
        sense = lesk(text.split(), token.text)
        if sense:
            print(token.text, "→", sense.definition())

# -------------------------------
# LAB 7: Lemmatization + Generation
# -------------------------------
def lemmatize_generate(text):
    doc = nlp(text)
    lemmas = [tok.lemma_ for tok in doc]
    print("Lemmas:", lemmas)

    if "cat" in lemmas and "run" in lemmas:
        print("Formal: The cat is running.")
        print("Conversational: Cats run.")
        print("Simplified: The cat runs.")

# -------------------------------
# UNIVERSAL PIPELINE
# -------------------------------
if __name__ == "__main__":
    text = "The cat was running and it jumped on the mat near the bank."

    print("\n=== LAB 1 ===")
    tokens = tokenize(text)
    print("Tokens:", tokens)

    print("\n=== LAB 2 ===")
    no_stop, pos = stopwords_pos(tokens)
    print("Without Stopwords:", no_stop)
    print("POS Tags:", pos)

    print("\n=== LAB 3 ===")
    non_english_demo()

    print("\n=== LAB 4 ===")
    syns, ants = synonyms_antonyms("good")
    print("Synonyms of 'good':", syns)
    print("Antonyms of 'good':", ants)

    print("\n=== LAB 5 ===")
    ngram_out = ngram_analysis(no_stop)
    for k, v in ngram_out.items():
        print(k, ":", v)

    print("\n=== LAB 6 ===")
    discourse_analysis(text)

    print("\n=== LAB 7 ===")
    lemmatize_generate(text)

    print("\n✅ FULL NLP PIPELINE COMPLETED ✅")