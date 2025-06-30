export async function prerender() {
    const { default: App } = await import("./src/components/App.tsx");
    const { renderToString } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { html: beautifyHtml } = await import("js-beautify");
    const { general } = await import("./src/lib/data/general.ts");
    const html = beautifyHtml(renderToString(createElement(App)));
    const links = new Set(["/"]);
    return {
        html,
        links,
        head: {
            title: `${general.name}'s website`,
        },
    };
}
