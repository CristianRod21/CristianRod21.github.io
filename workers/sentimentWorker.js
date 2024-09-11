import { pipeline, env } from "@xenova/transformers";

// Based on https://github.com/xenova/transformers.js/tree/main/examples/next-client/src/app
// Skip local model check
env.allowLocalModels = false;

class PipelineSingleton {
    static task = 'sentiment-analysis';
    static model = 'Cohee/distilbert-base-uncased-go-emotions-onnx';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            try {
                this.instance = pipeline(this.task, this.model, { progress_callback });
            } catch (error) {
                console.error('Error creating pipeline:', error);
                throw error;
            }
        }
        return this.instance;
    }
}

self.addEventListener('message', async (event) => {    
    if (event.data.action === 'init') {
        try {
            self.postMessage({ status: 'initiate' });
            await PipelineSingleton.getInstance(x => {
                self.postMessage({ status: 'progress', message: x.status });
            });
            self.postMessage({ status: 'ready' });
        } catch (error) {
            console.error('Error initializing pipeline:', error);
            self.postMessage({ status: 'error', error: error.message });
        }
    } else if (event.data.action === 'infer') {
        try {
            let classifier = await PipelineSingleton.getInstance();
            let output = await classifier(event.data.text);
            self.postMessage({
                status: 'complete',
                output: output,
            });
        } catch (error) {
            console.error('Error during inference:', error);
            self.postMessage({
                status: 'error',
                error: error.message,
            });
        }
    }
});
