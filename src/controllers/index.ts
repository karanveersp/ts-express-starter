import { Request, Response } from 'express';
const index = (req: Request, res: Response) => {
    res.render('pages/index', {
        title: 'template engines',
        template_engines: [
            'Mustache',
            'Handlebars',
            'Marko JS',
            'Squirrelly'
        ]
    });
}

export default {
    index
}