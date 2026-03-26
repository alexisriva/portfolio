import useAISummary from '../hooks/useAISummary';

const AISummary = () => {
  const { tone, setTone, summary, loading, error, generateSummary } = useAISummary();

  const tones = [
    { id: 'Professional', label: 'Professional', emoji: '👔' },
    { id: 'Casual', label: 'Casual', emoji: '☕' },
    { id: 'Donkey from Shrek', label: 'Donkey from Shrek', emoji: '🫏' },
    { id: 'Pirate', label: 'Pirate', emoji: '🏴‍☠️' },
    { id: 'Shakespearean', label: 'Shakespearean', emoji: '📜' },
    { id: 'Tech Bro', label: 'Tech Bro', emoji: '💻' },
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
          AI Summary Generator
        </h2>
        <p className="text-neutral-400 max-w-xl">
          Curious about my background? Let my AI agent summarize it for you in your preferred style.
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="grow">
            <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              Select Tone
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tones.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTone(t.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    tone === t.id
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/50'
                      : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200'
                  }`}
                >
                  <span>{t.emoji}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generateSummary}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <span>✨</span> Generate Summary
            </>
          )}
        </button>

        {error && (
          <div className="mt-4 p-4 rounded-lg bg-red-900/20 border border-red-900/50 text-red-200 text-sm text-center">
            {error}
          </div>
        )}

        {summary && (
          <div className="mt-6 pt-6 border-t border-neutral-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-neutral-200 leading-relaxed font-light">
                {summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AISummary;
