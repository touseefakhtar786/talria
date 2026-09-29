import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TALRIA LIMITED DMCC | Pioneers in Supraglottic Airway Technologies (i-gel® & v-gel®)',
      },
      {
        name: 'description',
        content:
          '“Just breathing can be such a luxury at times.” TALRIA LIMITED DMCC — Global medical device intellectual property & engineering enterprise founded by Dr. Muhammed Aslam Nasir, inventor of i-gel® human airway and v-gel® veterinary airway devices.',
      },
      {
        name: 'keywords',
        content:
          'Talria Limited DMCC, Dr Muhammed Aslam Nasir, i-gel, v-gel, supraglottic airway, Docsinnovent, Intersurgical, difficult airway, anaesthesia, veterinary airway',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.setItem('nl-hud:public:v1', 'hidden');
                localStorage.setItem('nl-hud:owner-private:v1', 'hidden');
              } catch (e) {}
              if (typeof MutationObserver !== 'undefined') {
                new MutationObserver(function(mutations) {
                  for (var i = 0; i < mutations.length; i++) {
                    var added = mutations[i].addedNodes;
                    for (var j = 0; j < added.length; j++) {
                      var n = added[j];
                      if (n && n.nodeType === 1) {
                        if (
                          n.id === 'nl-badge-frame' ||
                          n.id === 'nl-hud-frame' ||
                          (n.tagName === 'IFRAME' && (n.title === 'Powered by Netlify' || n.title === 'Netlify')) ||
                          (n.tagName === 'SCRIPT' && n.src && n.src.indexOf('/.netlify/scripts/hud') !== -1)
                        ) {
                          n.remove();
                        }
                      }
                    }
                  }
                }).observe(document.documentElement, { childList: true, subtree: true });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070d19] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        <div id="nl-badge-frame" style={{ display: 'none' }} aria-hidden="true" />
        <div id="nl-hud-frame" style={{ display: 'none' }} aria-hidden="true" />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
