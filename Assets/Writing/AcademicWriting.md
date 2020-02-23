

# Be repeative. 

## 3 rules on what to write in writing. 

- Say what you are going to say. (Have a topic sentence in fron in every level e.g. paragraph, subsection, section, paper) 
- Say it. (Support the topic sentence) 
- Say what you said. (Summarize or reveal the reason why you build up) 

### 3 rules for paragaph

- Start a paragraph with a topic sentence. 
- Write sentences that supports the topic setence 
- Briefly summarize it at the end and tell them what they should take away from this paragraph. 

### 3 rules for paper

- In the introduction, you should give them a summarized version of the whole paper including, motivation, gotal, what we did (method), the result, and what we learned. Give them what they want and do not hide anything for later surprise. People hate surprise. Make them know what's upcoming. Make the paper predictable. 

### 3 rules for subsection/section

- the very first sentence of subsection/section should describe what the section is about. 
- if you stick to this principle, you should be able to write a draft of an abstract by collecting the first sentence of each section. 


## Let them understand what I want to tell by 

- reading the title (10 seconds version of your paper) 
- reading the abstract (2 minute version of your paper) 
- reading the introduction (5 minute version of your paper) 
- reading the conclusion (3 minute version of your paper

# Be scientific. 




# Structure of an Academic Paper

- Title --> 10 second version of your paper
- Abstract --> 2 minute version of your paper
- Introduction (motivation) --> 5 minute version of your paper
  - prevew results 
  - research questions 
  - hypothesis
  - goals 
- Related Works --> What people have done in the past (b/c we want to know the boundary)  (before your work) 
  - novelty - how we are different from other works. 
  - significance - but people care about this problem. 
- Method
  - what we did ; e.g. build a system 
  - how we validated our claim ; e.g.  validate the system with a user study 
- Result
- Discussion  (after your work) 
  - causal inference
  - before vs. after  ( mirrored Related works) 
- (Limitation) 
- (Future Work) 
- Conclusion --> 3 minute version of your paper
  - summarize result

# Tense

- (Past tense) 
  - when describing what people have done in the past. 
  - when describing what you did in your method (implementation / user study) 
- (Future tense) 
  - Nope. No future tense is used in academic writing unless it is a proposal. Not even for a future work. (Say we "plan to") unless you are 100% sure that you "will" do it, which cannot be true. 
- (Present perfect tense) 
  - When you want to say what people "have done". This means that there is a body of work that multiple researchers worked on the topic that you describe. 
- (Present tense) 
  - everything else.
- Useful Links
  - https://writingcenter.unc.edu/tips-and-tools/verb-tenses/
  - https://writeitrightstudycoach.wordpress.com/tips-for-writing-your-dissertation/
  
# Some random advices
  
  - The art of academic writing is not to impress readers but to make them difficult to disagree with you. 
  

# Writing Correctness and Style Pet Peeves (Prof. Tamara Munzner)
## Correctness
- avoid contractions in formal technical writing
- every figure must be referenced in the main body text
- "it's" is a contraction for "it is", not a possessive 
- citations are grammatically invisible, you shouldn't use them for nouns. Correct: "The PivotGraph system [13] features a derived aggregate network". Incorrect: "Aggregation is also used in [13]".
- whether to hyphenate a noun phrase depends on how it is used. Use "foo bar" when a noun phrase is used as a noun, and "foo-bar" when the phrase is used as an adjective. Correct: "we lay out elements end to end in a line" (noun), "we make an end-to-end argument as in networking" (adjective).
- in a similar spirit, "lay out" is a verb and "layout" is a noun. Correct: "we lay out the graph splendidly" (verb use), "the layout is splendid because" (noun use).
- please get principal/principle right. principal = main, principle = idea. PCA stands for Principal Components Analysis. PI stands for Principal Investigator.
## References
- in a bibliography, always always hand-check bibtex that you get off the web. it's usually inconsistent or incomplete.
- be consistent with journal/conference names. no need for publisher address unless it's someplace obscure, and no need for publisher if it's implicit in the conf/journal name (i.e. ieee/acm), and no need for the location of the conference. always doublecheck that the pages are in there (both the start and end page!). the only acceptable exceptions are when it really is an online-only venue where there are no explicit pages (examples include the BELIV workshop proceedings or the Foundations and Trends in Humanâ€“Computer Interaction journal).
- also be concise and consistent: 'Trans.' not 'Transactions', 'Symp.' not 'Symposium', 'Conf.' not 'Conference'. don't include words like "of the" or "on". Don't ever say 'pages', just 'p.'
- do include the accepted nickname/shortname for conferences in parentheses after the long name. don't include the year after that nickname, it's already communicated by the year that comes at the end of the citation.
- example of bad bibliography snarfed off the web:
- "M. Wattenberg. A note on space-filling visualizations and space-filling curves. In Proc. of the IEEE Symposium on Information Visualization (INFOVIS'05), volume 0, page 24, Los Alamitos, CA, USA, 2005. IEEE Computer Society."

  after fixing:

  "M. Wattenberg. A note on space-filling visualizations and space-filling curves. In Proc. IEEE Symp. Information Visualization (InfoVis), p 181-186, 2005"

- if you're pressed for space, change long author lists to 'FirstAuthor et al'. I normally do full names for four or less, and switch to et al for five or more. The way to do this in latex/bibtex is "John Smith and others" for author list.

- make sure that you've got the right capitalization in titles using curly braces around elements that should not be lowercased automatically. Main offenders are "D" (3D, ND), acronyms, and camelcase names.
- in short: check your bibliography *very carefully*. do not be sloppy and inconsistent. be assured that i will notice.

## Style
- The issues below are stylistic choices - I'm not saying the other way is technically incorrect, I'm saying I have such a strong preference for this way that I will change it whenever I edit.
- avoid parentheses whenever possible, they interrupt flow. It's OK to use them when defining acronyms, but otherwise I try to hold myself to only one parenthetical remark per paper.
- avoid e.g. and i.e., spell out "such as" or "for example" instead. Again, it's a flow issue.
- minimize use of possessives with nouns. So instead of "feature's sequences", say "sequences of a feature". it's easier to parse.
- avoid "this" without a noun after it, especially at the beginning of a sentence. Instead of "This shows that we are fabulous", say "This situation shows that we are fabulous", to make the referent unambiguous.

  in more detail from Ullman, on "Avoid non-referential this"

  While it sounds pedantic at first, you get a huge increase in clarity by chasing the "nonreferential this" from students' writing. Many students (and others) use "this" to refer to a whole concept rather than a noun. For example: "If you turn the sproggle left, it will jam, and the glorp will not be able to move. This is why we foo the bar." Now the writer of this prose fully understands about sproggles and glorps, so they know whether we foo the bar because glorps do not move, or because the sproggle jammed. It is important for students to put themselves in the place of their readers, who may be a little shaky on how sproggles and glorps work, and need a more carefully written paragraph.

  Source: Jeffrey D. Ullman, Advising students for success, CACM 52(3):34-37, March 2009

- always use the Oxford/serial comma with lists. instead of "we have apples, oranges and bananas for sale", say "we have apples, oranges, and bananas for sale". The final comma is critical for resolving ambiguity in some situations. Like this one: http://www.outsidethebeltway.com/merle-haggard-and-the-gay-serial-comma/
- avoid the passive voice, use active voice. passive voice makes your text too ambiguous about who is the agent of action.
- you must have some prose between section and subsection header
- avoid "in this section we do XXX". just *do* XXX!
- emphasize a word (with bold or italics, as you prefer) when you first *define* it, not when you first *use* it. ideally the definition and the first use are the same. but it might be a sentence or two later.
- firstly vs. first is admittedly an issue of personal preference. i strongly prefer the latter. let me bring your attention to a quote from Elements of Style: "Do not dress words up by adding 'ly' to them, as though putting a hat on a horse."
- avoid double negatives, use a positive instead because it's easier to parse
- use parallel structure when possible, both at the level of sentences in a paragraph and at the level of section naming. Correct: Naming Foo, Linking Bar, Adding Bat. Incorrect: Name Foo, Linking Bar, Bat Additions.
- avoid switching between tenses unless you have a very good reason to do so. usually what you're reporting on in the paper should stay in the present tense (Correct: "the system is designed to do foo". Incorrect: "the system was designed to do foo".) past tense should be reserved for things truly in the past, like what users did during a user study.
- for captions, use parentheses around the subfigure labels to distinguish them "(a) blah blah". Always have a (possibly short) bit saying what the full figure does before starting with subfigure descriptions. Each subfigure should have its own label, rather than having a continuing sentence where you mention subfigure bits as you go. Correct: "Key aspects of foobar. (a) The first thing. (b) The second thing." Incorrect: "The first thing is great (a), and I love the second thing (b) too".
- plus everything that John Owens says here: http://www.ece.ucdavis.edu/~jowens/commonerrors.html
- plus everything in the splendid grammar book Bugs in Writing by Lyn Dupre

(Credit) Tamara Munzner

