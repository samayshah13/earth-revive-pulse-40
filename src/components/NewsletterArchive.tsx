import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import mcop2026 from '@/assets/newsletters/mcop-2026.pdf.asset.json';
import exchange202403 from '@/assets/newsletters/exchange-2024-03.pdf.asset.json';
import exchange202311 from '@/assets/newsletters/exchange-2023-11.pdf.asset.json';
import exchange202310 from '@/assets/newsletters/exchange-2023-10.pdf.asset.json';
import press202310 from '@/assets/newsletters/press-2023-10.pdf.asset.json';
import exchange202210 from '@/assets/newsletters/exchange-2022-10.pdf.asset.json';

type Newsletter = {
  title: string;
  date: string;
  tag: string;
  description: string;
  url: string;
  fileName: string;
};

const newsletters: Newsletter[] = [
  {
    title: 'JBCN × MCOP 2026 Newsletter',
    date: 'April 2026',
    tag: 'Flagship',
    description:
      "Reimagining climate action — innovation at the nexus of policy and community, featuring India's first UN-backed COP simulation hosted at JBCN Parel.",
    url: mcop2026.url,
    fileName: 'JBCN-MCOP-2026-Newsletter.pdf',
  },
  {
    title: 'Virtual Exchange with Lebanon',
    date: '27 March 2024',
    tag: 'Global Exchange',
    description:
      'Grades 7–9 in conversation with Ali Ben Abi Taleb College, Lebanon, through Take Action Global — e-waste, sustainability projects and youth-led solutions.',
    url: exchange202403.url,
    fileName: 'CAP-Virtual-Exchange-Lebanon-March-2024.pdf',
  },
  {
    title: 'Global Climate Change Conference',
    date: '14 November 2023',
    tag: 'Conference',
    description:
      'JBCN hosted its very own global climate conference with partner schools from the UAE and Brazil, complete with student presentations and a climate skit.',
    url: exchange202311.url,
    fileName: 'CAP-Global-Climate-Conference-Nov-2023.pdf',
  },
  {
    title: 'International Virtual Exchange',
    date: '25 October 2023',
    tag: 'Global Exchange',
    description:
      'Grade 8 and 9 learners shared JBCN’s tree plantation drive, beach cleanup with Change Is Us, and creative waste-segregation ideas with schools worldwide.',
    url: exchange202310.url,
    fileName: 'CAP-Virtual-Exchange-Oct-2023.pdf',
  },
  {
    title: 'News Hub — Press Coverage',
    date: '26 October 2023',
    tag: 'In the Press',
    description:
      'Mumbai’s News Hub daily covers the Climate Action Project at JBCN Parel — see page 3 for the full feature on our learner-led initiatives.',
    url: press202310.url,
    fileName: 'News-Hub-Press-Coverage-Oct-2023.pdf',
  },
  {
    title: 'The First Virtual Exchange',
    date: '18 October 2022',
    tag: 'Where It Began',
    description:
      'The launch of the Climate Action Project at JBCN Parel with Take Action Global — the very first international exchange that started it all.',
    url: exchange202210.url,
    fileName: 'CAP-International-Virtual-Exchange-Oct-2022.pdf',
  },
];

const NewsletterArchive = () => {
  const [active, setActive] = useState<Newsletter | null>(null);

  return (
    <section id="newsletters" className="py-16 md:py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            Newsletters &amp; Press
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Read Our{' '}
            <span className="bg-gradient-earth bg-clip-text text-transparent">Newsletters</span>
          </h2>
          <p className="text-muted-foreground">
            Every milestone of the Climate Action Project at JBCN Parel — documented, published and free to read or download.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((item, i) => (
            <motion.div
              key={item.fileName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full p-6 flex flex-col gap-4 border border-primary/10 bg-card/70 backdrop-blur hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-[11px]">{item.tag}</Badge>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                  <h3 className="text-lg font-bold leading-snug mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="flex gap-2 pt-1">
                  <Button size="sm" className="flex-1" onClick={() => setActive(item)}>
                    <Eye className="w-4 h-4 mr-1.5" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={item.url} download={item.fileName}>
                      <Download className="w-4 h-4 mr-1.5" />
                      Download
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 gap-0">
          <DialogHeader className="px-5 py-4 border-b border-border">
            <DialogTitle className="text-base md:text-lg pr-8 text-left">
              {active?.title}
              <span className="block text-xs font-normal text-muted-foreground mt-0.5">{active?.date}</span>
            </DialogTitle>
          </DialogHeader>
          {active && (
            <>
              <div className="h-[65vh] md:h-[70vh] bg-muted">
                <object data={active.url} type="application/pdf" className="w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Your browser can’t display PDFs inline.
                    </p>
                    <Button asChild>
                      <a href={active.url} target="_blank" rel="noopener noreferrer">Open the newsletter</a>
                    </Button>
                  </div>
                </object>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 px-5 py-4 border-t border-border">
                <Button variant="outline" className="flex-1" asChild>
                  <a href={active.url} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-1.5" />
                    Open in new tab
                  </a>
                </Button>
                <Button className="flex-1" asChild>
                  <a href={active.url} download={active.fileName}>
                    <Download className="w-4 h-4 mr-1.5" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewsletterArchive;
