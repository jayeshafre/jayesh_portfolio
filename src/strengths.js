{/* CTA Buttons - Terminal Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="btn-primary text-center font-mono">
                <Terminal className="inline w-4 h-4 mr-2" />
                ./view_projects.sh
              </a>
              <a href="#contact" className="btn-secondary text-center font-mono">
                <Mail className="inline w-4 h-4 mr-2" />
                ./contact.sh
              </a>
            </div>

            {/* Strengths Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">strengths.js</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 text-sm mb-4 font-mono">
                  <span className="text-amber-400">const</span> <span className="text-white">strengths</span> = [
                </div>
                <div className="ml-4 space-y-2">
                  {[
                    "Problem-solving & analytical thinking",
                    "Quick learner & adaptable",
                    "Effective team player",
                    "Detail-oriented & clean coding practices",
                    "Strong debugging & troubleshooting",
                    "Time management & meeting deadlines",
                    "Continuous learner"
                  ].map((strength, index, array) => (
                    <div key={index} className="flex items-start gap-2 font-mono">
                      <span className="text-green-400">▸</span>
                      <span className="text-cyan-300 text-sm">
                        "{strength}"{index < array.length - 1 ? ',' : ''}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-white font-mono text-sm mt-2">];</div>
              </div>
            </div>

            {/* Languages Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">languages.json</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 text-sm mb-4 font-mono">
                  <span className="text-amber-400">const</span> <span className="text-white">languages_known</span> = &#123;
                </div>
                <div className="ml-4 space-y-2">
                  {[
                    { lang: 'english', level: 'Professional Proficiency' },
                    { lang: 'hindi', level: 'Fluent' },
                    { lang: 'marathi', level: 'Fluent' }
                  ].map(({ lang, level }, index, array) => (
                    <div key={lang} className="font-mono">
                      <span className="text-green-400">"{lang}"</span>
                      <span className="text-white">: </span>
                      <span className="text-amber-300">"{level}"</span>
                      {index < array.length - 1 ? <span className="text-white">,</span> : ''}
                    </div>
                  ))}
                </div>
                <div className="text-white font-mono text-sm mt-2">&#125;;</div>
              </div>
            </div>