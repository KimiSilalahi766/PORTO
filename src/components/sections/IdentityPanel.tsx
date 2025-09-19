import { resumeData } from '@/content/resume'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function IdentityPanel({ title, summary }: { title: string, summary: string }) {
  return (
    <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.6}}>
      <Card>
        <div className="grid gap-[var(--space-3)]">
          <div className="text-2xl font-semibold tracking-phi-wide">{title}</div>
          <div className="text-white/85 tracking-phi lead-phi text-[1.05rem]">{summary}</div>
          <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
            <div className="space-y-[var(--space-2)]">
              <div className="font-semibold tracking-phi-wide text-lg">Education</div>
              <div className="text-[0.98rem] opacity-90 tracking-phi">{resumeData.education.institution}</div>
              <div className="text-[0.98rem] opacity-90 tracking-phi">{resumeData.education.degree}</div>
              <div className="text-[0.98rem] opacity-90 tracking-phi">{resumeData.education.period} — GPA {resumeData.education.gpa}</div>
            </div>
            <div className="space-y-[var(--space-2)]">
              <div className="font-semibold tracking-phi-wide text-lg">Contacts</div>
              <div className="space-y-[calc(var(--space-phi)*0.85)]">
                <div className="grid grid-cols-[max-content_10px_1fr] gap-x-[0.5ch] gap-y-[calc(var(--space-phi)*0.7)] items-center">
                  <div className="text-[0.98rem] opacity-90 tracking-phi font-medium text-left">Phone</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi text-center">:</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi"><a className="underline decoration-dotted" href="tel:+6281246894985" target="_blank">+62 812-4689-4985</a></div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi font-medium text-left">Email</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi text-center">:</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi"><a className="underline decoration-dotted" href="mailto:kimsilalahi@gmail.com" target="_blank">kimsilalahi@gmail.com</a></div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi font-medium text-left">GitHub</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi text-center">:</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi"><a className="underline decoration-dotted" href="https://github.com/KimiSilalahi766" target="_blank">KimiSilalahi766</a></div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi font-medium text-left">LinkedIn</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi text-center">:</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi"><a className="underline decoration-dotted" href="https://id.linkedin.com/in/kimsang-silalahi-3a8b13308" target="_blank">kimsang-silalahi</a></div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi font-medium text-left">International Affairs</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi text-center">:</div>
                  <div className="text-[0.98rem] opacity-90 tracking-phi"><a className="underline decoration-dotted" href="https://iao.usu.ac.id/en/news/usu-students-took-part-at-humanitarian-program-in-malaysia" target="_blank">IAO News</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
