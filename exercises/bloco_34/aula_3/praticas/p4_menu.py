from gerenciator3000 import ReportLoader
import p4_G3000LoaderAdapter
import p4_ReportAnalyzer


# o loader da ferramenta é carregado do jeito que a ferramenta recomenda
g3000_loader = ReportLoader(...)
# o adaptador recebe o loader da ferramenta.
loader = p4_G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader.
analyzer = p4_ReportAnalyzer(loader)

analyzer.average()
